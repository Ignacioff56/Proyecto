// mock de una api de login
export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ignacio" && password === "123") {
        resolve({ username, name: "Ignacio", role: "Admin" });
      } else {
        reject("Usuario incorrecto");
      }
    }, Math.round(Math.random() * 1000));
  });
}
