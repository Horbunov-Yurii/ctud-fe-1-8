export const getIceAPI = async () => {
  const res = await fetch("http://localhost:3000/icecream");
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

// export const getIceAPI = () => {
//   return fetch("http://localhost:3000/icecream").then((res) => res.json());
// };
