import axios from 'axios';

const url: string = 'https://api.chucknorris.io/';

export const getCategories = async (): Promise<void | string[]> => {
    try {
        const res = await axios(`${url}jokes/categories`);
        return res.data;
    } catch(err) {
        console.log(err);
    }
};

export const getJoke = async (category: string): Promise<void | string> => {
    try {
        const res = await axios(`${url}jokes/random?category=${category}`);
        return res.data;
    } catch(err) {
        console.log(err);
    }
};
