import axios from 'axios';
const headers = {
    Client:"zDw2aza36ngAzh6vzstQUQ",
    Expiry: 1579342984,
    Uid:"a2@gmail.com",
    "Access-Token": "wWuh0QJDQudcw3rk6BD5FQ"
}
let host = "https://legdev.herokuapp.com"
export const getEmployees = () => {
    return axios.get( `${host}/api/v1/admins/members`, {headers:headers })
}
export const getEmployeeViewData = (id) => {
    return axios.get( `${host}/api/v1/admins/members/${id}`, {headers:headers })
}