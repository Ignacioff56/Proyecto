// mock de una api de login
export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ignacio" && password === "123") {
        resolve({ username, name: "Ignacio", role: "Admin" });
      } else if (username === "Pedrito666" && password === "123456") {
        resolve({ username, name: "Pedro", role: "Admin" });
      } else {
        reject("Usuario incorrecto");
      }
    }, Math.round(Math.random() * 1000));
  });

  // fetch(constants.BASE_URL_API + '/login', { body: { email, password } });
}
