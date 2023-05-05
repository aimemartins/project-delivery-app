const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordLength = 6;

const verifyLogin = (email, pasword) => {
  const validateEmail = regex.test(email);
  return (validateEmail && pasword.length >= passwordLength);
};
export default verifyLogin;
