import axios from 'axios';

const url = `http://localhost:5000/products`;
// http://localhost:5000/products
export const fetchProducts = async () => {
    try {
        const { data } = await axios.get(url);
        
        return data;
    } catch (error) {
        console.log(error);
    }
}
