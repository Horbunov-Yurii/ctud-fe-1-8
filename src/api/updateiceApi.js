export const upddateIceApi = async (id, icecream) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(icecream),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  const res = await fetch(`http://localhost:3000/icecream/${id}`, options);
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

// export const upddateIceApi = (id, icecream) => {
//     const options = {
//     method: "PUT",
//     body: JSON.stringify(icecream),
//     headers: {
//     "Content-Type": "application/json; charset=UTF-8",

// }}

//     return fetch(`http://localhost:3000/icecream/${id}`, options).then((res) => res.json())
// }
