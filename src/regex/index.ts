const emailPattern: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phonePattern: RegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{6,}$/

const emailValidation = (email: string) => {
  return emailPattern.test(email);
}

const phoneValidation = (phone: string) => {
  return phone.match(phonePattern) ? true : false;
}

const passwordValidation = (password: string) => {
  return passwordPattern.test(password);
}

export { emailValidation, phoneValidation, passwordValidation }