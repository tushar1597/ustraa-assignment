// import { getConfigs } from './configs';

const SERVER_ENDPOINT = "https://backend.ustraa.com/rest/V1/api/";

export const ROUTES = {
    GET_CATEGORY_PRODUCTS: SERVER_ENDPOINT + "catalog/v1.0.1/", 
    GET_CATEGORIES_AND_PRODUCTS: SERVER_ENDPOINT + "homemenucategories/v1.0.1?device_type=mob",
}