import axios from "axios";
import { MerchantParams } from "../interfaces/interface";
import { GET_ALL_MERCHANTS, GET_CAMPAIGNS } from "../routes/api_routes";


export const getAllMerchants = async () => {
    const response = await axios.get(GET_ALL_MERCHANTS).then(data => data)
      .catch((error) => {
        throw new Error(error.message);
      });
  
    return response.data;
  };
  
export const getAllCampaigns = async () => {
  const endpoint = GET_CAMPAIGNS;
    const response = await axios.get(endpoint).then(data => data)
      .catch((error) => {
        throw new Error(error.message);
      });
  
    return response.data;
  };