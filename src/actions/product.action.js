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