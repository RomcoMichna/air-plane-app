import axios from "axios";
import { apiModels } from "../models/apiModel";

export const fetchData = async (requestData: apiModels) => {
    try {
      const response = await axios.post("https://ogcie.iblsoft.com/ria/opmetquery", requestData);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      console.error(error);
    }
};
