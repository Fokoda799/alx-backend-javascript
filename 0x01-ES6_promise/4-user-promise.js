export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, rejsct) => {
    resolve({ firstName, lastName });
  });
}
