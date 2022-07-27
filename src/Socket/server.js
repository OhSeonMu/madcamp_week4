import axios from 'axios';

export const GetCode = (mode, level) => {
    var code = axios({
        method: 'post',
        url: '192.249.18.215',
        level : level
    });
    return code;
}