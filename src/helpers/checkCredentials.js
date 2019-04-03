export default data => {
  // console.log(data.username === "admin" && data.password === "12345");
  const isValid =
    data.username === "admin" && data.password.toString() === "12345";
  return isValid;
};
