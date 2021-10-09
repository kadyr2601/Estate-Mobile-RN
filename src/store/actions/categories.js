import CategoriesService from '../../service/categories'

function getCategoies() {
    return async (dispatch) => {
        dispatch({ type: "GET_CATEGORIES_START" })

        try {
            const categories = await CategoriesService.getCategories()

            console.log(categories)

            dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: categories })
        } catch (err) {
            dispatch({ type: "GET_CATEGORIES_FAILURE", payload: err})
        }
    }
}

export {
    getCategoies
}