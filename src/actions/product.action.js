import axios from 'axios';
import { TABS } from '../constants/constants';
import { ROUTES } from '../constants/routes';
import { PRODUCT } from './action-types';


export const setPageTab = () => dispatch => {
    let action = {};
    action.type = PRODUCT.SET_PAGE_TAB;
    // action.tab = tab;
    dispatch(action);    
}
export const getCategoriesAPI = () => dispatch => {
    console.log("called-2");
    var req_data = {
        headers: {

        },
        params: {
        
        }
      }
      axios.get(ROUTES.GET_CATEGORIES_AND_PRODUCTS, req_data)
          .then(res => {
            console.log(res);
            let categories = res && res.data  && res.data.category_list ? res.data.category_list : [];
            let product_list = res && res.data  && res.data.product_list && res.data.product_list.products ? res.data.product_list.products : [];
            let action = {};
            action.type = PRODUCT.GET_CATEGORIES_AND_PRODUCTS;
            action.catgs = categories;
            action.prd_lst = product_list;
            dispatch(action); 
          }).catch(err => {
              // console.log("ERROR::",err);
            //   FUNCTIONS.errorHandler(err,dispatch);
          })
}
export const setScrollRef = (ref) => dispatch => {
    let action = {};
    action.type = PRODUCT.SET_SCROLL_REF;
    action.value = ref;
    dispatch(action);
}
export const setViewAll = (val) => dispatch => {
    let action = {};
    action.type = PRODUCT.SET_VIEW_ALL;
    action.value = val;
    dispatch(action);
}
export const setSelectedCategoryAPI = (catg_id,product_map) => dispatch =>{
    let action = {};
    action.type = PRODUCT.SET_SEL_CATEGORY;
    action.value = catg_id;
    dispatch(action);
    if(product_map[catg_id] && product_map[catg_id].length){
            action.type = PRODUCT.UPDATE_PRODUCT_LIST;
            action.value = product_map[catg_id];
            dispatch(action);
        return;
    }
    var req_data = {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        params: {
            category_id: catg_id,
        }
      }
      axios.get(ROUTES.GET_CATEGORY_PRODUCTS, req_data)
          .then(res => {
            console.log(res);
            let products = res && res.data  && res.data.products ? res.data.products : [];
            let new_product_map = JSON.parse(JSON.stringify(product_map));
            new_product_map[catg_id] = products;
            let action = {};
            action.value = new_product_map;
            action.type = PRODUCT.UPDATE_PRODUCT_MAP;
            dispatch(action);
            action.type = PRODUCT.UPDATE_PRODUCT_LIST;
            action.value = new_product_map[catg_id];
            dispatch(action);
          }).catch(err => {
              // console.log("ERROR::",err);
            //   FUNCTIONS.errorHandler(err,dispatch);
          })
}