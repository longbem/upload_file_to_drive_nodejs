import { API_GG_Sheet } from '../../api'



export const SubmitRegisterAdmin = async (data) => {
    try {
        const res = await API_GG_Sheet.post('/2d3bcdcb-62ef-461a-8c7e-dd121a3764ee', data);
        if (res.status === 200) {
            return {
                message: 'Đăng ký thành công rồi đấy con vợ!!!',
                status: true,
            };
        } else {
            return {
                message: 'Lỗi con mẹ nó rồi!!!!',
                status: false,
            };
        }
    } catch (err){
        console.log('err', err)
    }
};

// export const getListAdminRegister = async () => {
//     try {
//         const res = await API_GG_Sheet.get('/2d3bcdcb-62ef-461a-8c7e-dd121a3764ee');
//         if (res.status === 200) {
//             return {
//                 data: res.data,
//                 status: true,
//             };
//         } else {
//             return {
//                 status: false,
//                 message: 'Lỗi con mẹ nó rồi!!!!',
//             };
//         }
//     } catch (err){
//         console.log('err', err);
//     }
// }