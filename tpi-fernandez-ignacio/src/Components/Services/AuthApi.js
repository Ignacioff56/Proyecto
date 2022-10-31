// mock de una api de login
export function login(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123456") {
        resolve({ role: "Admin" });
      } else {
        reject("Contraseña incorrecta");
      }
    }, Math.round(Math.random() * 1000));
  });

  // fetch(constants.BASE_URL_API + '/login', { body: { email, password } });
}
