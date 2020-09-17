import axios from 'axios';
import qs from 'qs';

import { JUHE_APPKEY } from "@/config/key";

function axiosPost(options) {
    axios({
        url: options.url,
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify({
            ...options.data,
            key: JUHE_APPKEY
        })
    })
        .then((res) => {
            options.success(res.data);
        })
        .catch((error) => {
            options.error(error)
        })
}


function axiosGet(options) {
    axios(options.url + "&key=" + JUHE_APPKEY)
        .then((res) => {
            options.success(res.data);
        })
        .catch((error) => {
            options.error(error)
        })
}

export {
    axiosGet,
    axiosPost
}