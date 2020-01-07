import axios from 'axios';
const headers = {
    Client:"zDw2aza36ngAzh6vzstQUQ",
    Expiry: 1579342984,
    Uid:"a2@gmail.com",
    "Access-Token": "wWuh0QJDQudcw3rk6BD5FQ"
}
let host = "https://legdev.herokuapp.com";
export const getShifts = () => {
    return axios.get( `${host}/api/v1/admins/jobs`, {headers:headers, params: {date:"2020-01-04", status:"upcoming"} })
}
export const getShiftViewData = (id) => {
    return axios.get( `${host}/api/v1/admins/jobs/${id}`, {headers:headers,  params: {date:"2020-01-04", status:"upcoming"}})
}