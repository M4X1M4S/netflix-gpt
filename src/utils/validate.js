export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!isEmailValid) {
    return "Invalid email address";
  }
  if (!isPasswordValid) {
    return "Password must contain at least 6 characters, including UPPER/lowercase and numbers";
  }
  return null;
};
