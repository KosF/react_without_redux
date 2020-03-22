export default data => {
  const { username, password } = data;
  const validCredentials =
    username === "admin" && password.toString() === "12345";

  return validCredentials;
};
