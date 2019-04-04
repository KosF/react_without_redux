export default data => {
  const validCredentials =
    data.username === "admin" && data.password.toString() === "12345";
  return validCredentials;
};
