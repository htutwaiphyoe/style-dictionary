import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID wRepwNvrnk6X7lfc-zL5WvxkiTBNcaXlF-omN831_wE",
    },
});
