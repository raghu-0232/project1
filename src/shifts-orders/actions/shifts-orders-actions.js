import axios from 'axios';
const headers = {
    Client:"zDw2aza36ngAzh6vzstQUQ",
    Expiry: 1579342984,
    Uid:"a2@gmail.com",
    "Access-Token": "wWuh0QJDQudcw3rk6BD5FQ"
}
let host = "https://dinu.pagekite.me/";
//https://dinu.pagekite.me/
//let host = "https://legdev.herokuappgit.com";
//send date from date picker
export const getShifts = () => {
    return axios.get( `${host}/api/v1/admins/jobs`, {headers:headers, params: {date:"2020-01-10", status:"assigned"} })
}
export const getShiftViewData = (id) => {
    return axios.get( `${host}/api/v1/admins/jobs/${id}`, {headers:headers,  params: {date:"2020-01-10", status:"assigned"}})
}
export const postShift = (date,id) => {
    let data = {id:id,shift_date:date};
    return axios.post( `${host}/api/v1/admins/jobs/post_job`, data , { headers:headers, params: {date:"2020-01-10", status:"assigned"} })
}

export const assignMembers = (data) => {
    return axios.post( `${host}/api/v1/admins/shift_applications/assign`, data , { headers:headers, params: {date:"2020-01-10", status:"assigned"} })
}