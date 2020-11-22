// import { PAGE_TYP } from '../constants/constants.js';
import { PRODUCT } from '../actions/action-types';

const initialState = {
    tab : 0,
    catgs : [],
    prd_lst : [],
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case PRODUCT.GET_CATEGORIES_AND_PRODUCTS : {
            return {...state,
                catgs: action.catgs,
                prd_lst: action.prd_lst,
            }
        }

       
		default:
			return state;
	}
}

export default productReducer;