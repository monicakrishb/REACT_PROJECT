export const validate = (username,password) => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
    //   toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
    //   toast.warning("Please Enter Password");
    }
    return result;
  };