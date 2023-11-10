export const hasASession = () => {
  try {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user.username) {
      return user.username;
    }
    return false;
  } catch (e) {
    return false;
  }
};
