import { useState, useEffect } from "react";
import { url, port } from "./Constant"
import axios from "axios";

const [data, setData] = useState([]);

const getData = async() => {
    try {
        const response = await axios.get(url + port + "/faq");
        //console.log(response.data);
        setData(response.data)
    } catch (error) {
        console.error(error);
    }
}

const postData = async(data) => { 
    try {
        const response = await axios.get(url + port + "/faq",data);
        //console.log(response.data);
        return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
}

export { getData ,postData };