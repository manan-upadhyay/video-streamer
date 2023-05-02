export const validateEmail = (value) => {
  if (!value) return "Email is required";

  if (
    !value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    return "Email is not valid";

  return null;
};

export const validatePassword = (value) => {
  if (!value) return "Password is required";
  if (
    !value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    )
  )
    return "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and must be at least 8 characters long";
  return null;
};
