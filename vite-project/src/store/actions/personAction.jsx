export {removeperson} from '../reducers/personSlice'
import axios from '../../utils/axios'
import { loadperson } from '../reducers/personSlice'


export const asyncloadperson = (id) => async(dispatch, getState) => {
    try{
      const detail =  await axios.get(`/person/${id}`);
      const externalid = await axios.get(`/person/${id}/external_ids`)
      const combindedCredits =  await axios.get(`/person/${id}/combined_credits`);  
      const tvCredits =  await axios.get(`/person/${id}/tv_credits`);  
      const movieCredits =  await axios.get(`/person/${id}/movie_credits`);  
  

      let theultimatedata = {
        detail: detail.data,
        externalid: externalid.data, 
        movieCredits: movieCredits.data,
        tvCredits: tvCredits.data,
        combindedCredits: combindedCredits.data,
      };

      dispatch(loadperson(theultimatedata));
  
       }catch(e){
        console.log("Error: ", error);
              }
}