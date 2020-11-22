import { getConfigs } from './configs';

const SERVER_ENDPOINT = getConfigs().SERVER_ENDPOINT + getConfigs().APP_VERSION + '/';

export const ROUTES = {
    SUBMIT_FORM : SERVER_ENDPOINT + 'contact/sb_fm',
    GET_ALL_CONTACTS : SERVER_ENDPOINT + 'contact/gt_cts',
    DELETE_CONTACT: SERVER_ENDPOINT + 'contact/del_ct',
    GET_CATEGORY_PRODUCTS: "https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1/", 
    GET_CATEGORIES_AND_PRODUCTS: "https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob",
}