export const delIceAPI = (id) => {
    return fetch(`http://localhost:3000/icecream/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());
}

