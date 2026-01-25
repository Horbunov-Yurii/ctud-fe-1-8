export const getIceAPI = () => {
  return fetch("http://localhost:3000/icecream").then((res) => res.json());
};

