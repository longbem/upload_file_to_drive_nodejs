const axios = require('axios');

dev_server_url = 'https://wrethink-devexec-command.herokuapp.com';

for(let i = 0; i < 5; i++) {
    const lastName = String(i+1).padStart(3, '0');
    const email = `tk${lastName}@ga.co`

    const param = {
            "command": "createNonConsoleAccount",
            "data": {
                "user": {
                    "email": email,
                    "firstName": "taikhoan",
                    "lastName": lastName,
                    "pin": "11111",
                    "acceptTermsOfService": true,
                    "isMain": true
                }
            }
    }
    
    const dataJson = JSON.stringify(param);

    const results = axios({
        method: 'post',
        url: dev_server_url,
        data: dataJson,
        headers: {
            "Accept": 'application/json',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiOTcyNmQ5ZS04OTFjLTRkNGItOWY4ZC05Y2I3MGFkMDU0NTEiLCJpYXQiOjE2MTcyMjU0OTN9.bZtn7tYxjtDVWz0ri7mnboFmyNb5ivxcdxAKns6w048',
            'Content-Type': 'application/json',
        }
    });

    console.log('===>>> call email <<<====: ', email);
    console.log('===>>> result state code <<<=====: ', results.status_code);
};
