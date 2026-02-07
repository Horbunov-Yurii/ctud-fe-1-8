export const delIceAPI = async (id) => {
  const res = await fetch(`http://localhost:3000/icecream/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

// export const delIceAPI = (id) => {
//     return fetch(`http://localhost:3000/icecream/${id}`, {
//         method: "DELETE",
//     }).then((res) => res.json());
// }
