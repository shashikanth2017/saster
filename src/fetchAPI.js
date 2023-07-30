import axios from "axios";

// headers: {
//     'X-RapidAPI-Key': '4786212398msh92f50d7aa534e7bp10cc45jsn648d61950bcf',
//     'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
//   }
export const baseUrl="trueway-matrix.p.rapidapi.com"
export const fetchAPi=async(url)=>{
    const {s}=await axios.get((url),{headers: {
        'X-RapidAPI-Key': '4786212398msh92f50d7aa534e7bp10cc45jsn648d61950bcf',
        'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
      }})
      return s;

}