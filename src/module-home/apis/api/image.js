import axios from 'axios';

export const getImages = async () => {
    const response = await axios.get('https://apimocha.com/bearbulltraders/api');
    return response.data;
}