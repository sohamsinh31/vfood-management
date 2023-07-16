import { useState, useEffect } from "react";
import { url, port } from "./Constant"


const getData = async () => {
    try {
        const response = await fetch(url + port + "/food");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const postData = async (data) => {
    try {
        const response = await fetch(url + port + "/food", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { getData ,postData };