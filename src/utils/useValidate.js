export default function (type, value, password, confirmPassword) {
  if (type === "login") return checkLogin(value);
  if (type === "email") return checkEmail(value);
  if (type === "password" || type === "confirmPassword") {
    return checkPassword(value, password, confirmPassword);
  }
}

function checkLogin(value) {
  if (value.length < 3) {
    return { status: false, message: "Минимальная длина 3 символа" };
  }
  if (value.length >= 20) {
    return { status: false, message: "Максимальная длина 20 символов" };
  }
  return { status: true, message: "" };
}

function checkEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(value)) {
    return { status: true, message: "" };
  } else {
    return { status: false, message: "Неверный формат" };
  }
}

function checkPassword(value, password, confirmPassword) {
  if (confirmPassword) {
    if (password === confirmPassword) {
      return { status: true, confirm: true, message: "" };
    } else {
      return { status: false, message: "Пароли не совпадают" };
    }
  } else {
    if (value.length < 3) {
      return { status: false, message: "Минимальная длина 3 символа" };
    }
    if (value.length >= 20) {
      return { status: false, message: "Максимальная длина 20 символов" };
    }
  }
  return { status: true, message: "" };
}
