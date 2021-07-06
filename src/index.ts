// import dotenv from 'dotenv';

// dotenv.config();

// console.log(process.env.GOOGLE_DRIVE_CLIENT_ID);
// console.log(process.env.GOOGLE_DRIVE_CLIENT_SECRET);
// console.log(process.env.GOOGLE_DRIVE_REDIRECT_URI);
// console.log(process.env.GOOGLE_DRIVE_REFRESH_TOKEN);

const addition = (a: number, b: number) => {
  return a + b;
};

const number1 = 5;
const number2 = 10;
const result = addition(number1, number2);

console.log('The result is %d', result);
