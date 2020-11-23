// import { PAGE_TYP } from '../constants/constants.js';
import { PRODUCT } from '../actions/action-types';

const initialState = {
    tab : 0,
    catgs : [],
    prd_lst : [],
    sel_catg_id : 185,
    product_map: {

    },
    sc_ref: null 
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case PRODUCT.GET_CATEGORIES_AND_PRODUCTS : {
            return {...state,
                catgs: action.catgs,
                prd_lst: action.prd_lst,
            }
        }
        case PRODUCT.SET_SCROLL_REF : {
            console.log(action);
            return { ...state,
                sc_ref: action.value
            }
        }
        case PRODUCT.SET_SEL_CATEGORY : {
            return {...state,
                sel_catg_id : action.value,
            }
        }
        case PRODUCT.UPDATE_PRODUCT_MAP : {
            return {...state,
                product_map : action.value,
            }
        }
        case PRODUCT.UPDATE_PRODUCT_LIST : {
            return {...state,
                prd_lst : action.value,
            }
        }

       
		default:
			return state;
	}
}

export default productReducer;