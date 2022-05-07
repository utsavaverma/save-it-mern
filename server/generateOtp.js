//This function is used to generate OTP to NGO's registered email address once the food request is accepted.

function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 10; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

module.exports = generateOTP;
