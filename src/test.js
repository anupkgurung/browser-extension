import axios from "axios";

export const test = async ()=>{
    try {
         const {data : {urls}} = await axios.get("https://api.unsplash.com/photos/random?client_id=7j16rzMtmipgveLlg0fYqhxKgmZvF0cJjwgH6f6EJAA")
         console.log(urls.regular)
    } catch (error) {
        console.log(error)
    }
}
