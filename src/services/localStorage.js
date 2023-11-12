export const hasASession = () => {
  try {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user.email) {
      return user.email;
    }
    return false;
  } catch (e) {
    return false;
  }
};
