export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({data: "This is a fake api"}),
      1000
    );
  });
}
