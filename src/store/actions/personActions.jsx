export { removeperson } from "../reducers/personSlice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get( `/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const latest = await axios.get(`/person/latest`);
        const images = await axios.get(`/person/${id}/images`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);


        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data,
            latest: latest.data,
            images: images.data
        };
        console.log(theultimatedetails)
        dispatch(loadperson(theultimatedetails));
    } catch (error) {
        console.log("Error: ", error);
    }
};