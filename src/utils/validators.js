

export const emailValidator = (text) => {
  const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return regExp.test(text)
}

export const passValidator = (text) => {
  const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regExp.test(text)
}
