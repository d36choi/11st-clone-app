
import axios from "axios";


export default {
    intall (Vue) {
        Vue.prototype.$search = async ({searchText}) => {
            const {data} = await axios.get(`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search?apikey=${1216}&searchText=${searchText}`)
            // api key 1216
            console.log(data)
            return data
        }
    }
}