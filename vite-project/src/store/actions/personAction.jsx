export {removeperson} from '../reducers/personSlice'
import axios from '../../utils/axios'
import { loadperson } from '../reducers/personSlice'


export const asyncloadperson = (id) => async(dispatch, getState) => {
    try{
      const detail =  await axios.get(`/person/${id}`);
      const combindedCredits =  await axios.get(`/person/${id}/combined_credits`);  
      const tvCredits =  await axios.get(`/person/${id}/tv_credits`);  
      const movieCredits =  await axios.get(`/person/${id}/movie_credits`);  
  

      let theultimatedata = {
        detail: detail.data,
        externalid: externalid.data, 
        combindedCredits: movieCredits.data,
        combindedCredits: tvCredits.data,
        combindedCredits: combindedCredits.data,
      };

      dispatch(loadperson(theultimatedata));
  
       }catch(e){
        console.log("Error: ", error);
              }
}