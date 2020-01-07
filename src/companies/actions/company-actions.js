import axios from 'axios';
const headers = {
    Client:"zDw2aza36ngAzh6vzstQUQ",
    Expiry: 1579342984,
    Uid:"a2@gmail.com",
    "Access-Token": "wWuh0QJDQudcw3rk6BD5FQ"
}
let host = "https://legdev.herokuapp.com"
export const getCompanies = () => {
    return axios.get( `${host}/api/v1/admins/users`, {headers:headers })
}
export const getCompanyViewData = (id) => {
    return axios.get( `${host}/api/v1/admins/users/${id}`, {headers:headers })
}