export const hasASession = (func) => {
  const user = localStorage.getItem("userData");
  if (user != null) {
    func(JSON.parse(user));
    return true;
  }

  return false;
};
