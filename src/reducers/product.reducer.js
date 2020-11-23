import { PRODUCT } from '../actions/action-types';

const initialState = {
    tab : 0,
    catgs : [],
    prd_lst : [],
    sel_catg_id : 185,
    vw_all: false,
    to_shw_lgth:3, //to show length
    product_map: {

    },
    sc_ref: null,
    pr_loading: false 
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case PRODUCT.GET_CATEGORIES_AND_PRODUCTS : {
            return {...state,
                catgs: action.catgs,
                prd_lst: action.prd_lst,
            }
        }
        case PRODUCT.SET_VIEW_ALL : {
            return { ...state,
                vw_all: action.value,
            }
        }
        case PRODUCT.SET_SCROLL_REF : {
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
        case PRODUCT.SET_TO_SHOW_LENGTH : {
            return {...state,
                to_shw_lgth : action.value,
            }
        }
       case PRODUCT.PR_LOADING : {
           return {...state,
            pr_loading : action.value,
        }
       }
		default:
			return state;
	}
}

export default productReducer;