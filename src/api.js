import axios from "axios";

const api = axios.create({
    baseURL: "https://my-nc-news-2ql9.onrender.com/api"
})

function getArticles() {
    return api.get("/articles").then((response) => {
        return response.data
    })
}

function getArticleById(article_id) {
    return api.get(`/articles/${article_id}`).then((response) => {
        return response.data.article
    })
}

function getArticleComments(article_id) {
    return api.get(`/articles/${article_id}/comments`).then((response) => {
        return response.data.comments
    })
}

function updateArticleById(article_id) {
    return api.patch(`/articles/${article_id}`, {inc_votes: 1}).then((response) => {
        console.log("patch complete")
    })
}


export {getArticles,getArticleById, getArticleComments, updateArticleById}