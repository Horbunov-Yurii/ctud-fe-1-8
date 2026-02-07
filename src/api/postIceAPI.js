export const postIceAPI = async (iceCream) => {
  const options = {
    method: "POST",
    body: JSON.stringify(iceCream),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const res = await fetch("http://localhost:3000/icecream", options);
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

// export const postIceAPI = (iceCream) => {
// const options = {
// method: "POST",
// body: JSON.stringify(iceCream),
// headers: {
// "Content-Type": "application/json; charset=UTF-8",
// },
// };
//   return fetch("http://localhost:3000/icecream", options).then((res) => res.json());
// };
