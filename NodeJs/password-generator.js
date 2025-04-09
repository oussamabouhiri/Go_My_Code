const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
});

console.log("Your PassWord is  ", password);
