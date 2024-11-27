import axios from "axios";

const lord = new axios.create({
    baseURL: 'https://trello.vimlc.uz'
})

export default lord