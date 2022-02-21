import axios from "axios";
// import { url } from "inspector";


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '404ec9b136mshae4b9233134da14p1e6b01jsnd7fba570b35e'
          }
    });

    return data;
}