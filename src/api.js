import axios from "axios";

const api = axios.create({
    baseURL: "https://my-nc-news-2ql9.onrender.com/api"
})

function getArticles() {
    return api.get("/articles").then((response) => {
        return response.data
    })
}

export {getArticles}