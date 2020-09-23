export default async (to, from, next) => {
  if (to.name !== "Login" && !localStorage.getItem("token")) {
    next({ name: "Login" });
  } else {
    if (to.name === "Login" && localStorage.getItem("token")) {
      next({ name: "Home" });
    } else {
      next();
    }
  }
};
