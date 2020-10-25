import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID 0yqvFSmNQ3_K81IiNQVvp4uPEBLZIIq4cjUV5nZRBh8",
    },
});
