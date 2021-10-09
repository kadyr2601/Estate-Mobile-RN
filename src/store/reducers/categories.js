const initialState = {
    categoriesLoading: false,
    errorCategoriesRequest: null,
    categories: [],
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_START':
            return {
                ...state,
                categoriesLoading: true,
            }

        case 'GET_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
                categoriesLoading: false,
            }

        case 'GET_CATEGORIES_FAILURE':
            return {
                ...state,
                categoriesLoading: false,
                errorCategoriesRequest: action.payload,
            }

        default:
            return state
    }
}

export default categories