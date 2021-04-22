import axios from 'axios';

const KEY = '62e5bea3-bc91-4ef2-b9f7-0fdfeb4001fd';

export default axios.create({
    baseURL: 'https://glot.io/api',
    headers: {
        'Authorization': KEY,
        'Content-type': 'application/json',
    }
})