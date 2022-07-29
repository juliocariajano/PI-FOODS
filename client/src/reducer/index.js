const initialState={
    recipes:[],
    setRecipes:[],
    stateDetailRecipe:[],
    types:[],
}


function reducer (state=initialState, action){
    switch(action.type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes:action.payload,
                setRecipes:action.payload,
                
            }
            case 'SEARCHBYNAME':
                return{
                    ...state,
                    recipes:action.payload
                }
            case 'DETAIL_RECIPE':
                return{
                    ...state,
                    stateDetailRecipe:action.payload
                }
            case 'SET_DETAIL_RECIPE':
                return{
                    ...state,
                    stateDetailRecipe:action.payload
                }
            case "GET_TYPES":
                return {
                    ...state,
                    types:action.payload
                }
            case 'ADD_RECIPE':
                return{
                    ...state,
                
                }
            case 'FILTER_BY_DIET_TYPE':
                const stateAll = state.setRecipes;
                const filter =
                  action.payload === "all"
                    ? stateAll
                    : stateAll.filter((el) => el.dietTypes.includes(action.payload));
                return {
                  ...state,
                  recipes: filter,
                }
            // case 'FILTER_BY_ORIGIN':
            //     const allRecipes1 = state.allrecipes;
            //     const filterByOrigin=
            //     action.payload === 'all' 
            //     ?allRecipes1
            //     :action.payload === 'api'
            //     ? allRecipes1.filter(elem=> isNaN(elem.id)===false)
            //     :allRecipes1.filter(elem=> isNaN(elem.id)!==false)
            //     return {
            //         ...state,
            //         recipes: filterByOrigin[0]?filterByOrigin:[{msg: ` there is no recipe created, please create a new recipe`}],
            //         types:filterByOrigin
            //     } 
            case 'ALPHABETICAL_SORT':
            const filterOrder = action.payload === "ascendente"? state.recipes.sort((a,b)=> a.name.localeCompare(b.name)) : state.recipes.sort((a,b)=>b.name.localeCompare(a.name));
                return {
                    ...state,
                    recipes:filterOrder
                }
            case 'SCORE_SORT':
                return{
                    ...state,
                    recipes:action.payload,
                }
               default:
                return{

                    ...state
                }
    }
}

export default reducer;