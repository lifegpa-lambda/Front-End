const Signout = () => {
  console.log("signout");
  localStorage.removeItem("token");
  window.location.href = "/";
};

export default Signout;
