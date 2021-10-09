import axios from 'axios'

function getCategories () {
    return axios.get("http://192.168.0.175/api/categories/")
}

export default {
    getCategories,
}