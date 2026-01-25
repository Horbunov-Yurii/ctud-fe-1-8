
export const postIceAPI = (iceCream) => {
const options = {
method: "POST",
body: JSON.stringify(iceCream),
headers: {
"Content-Type": "application/json; charset=UTF-8",
},
};
  return fetch("http://localhost:3000/icecream", options).then((res) => res.json());
};
