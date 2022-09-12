const initialState={
    recipes:[],
    setRecipes:[],
    stateDetailRecipe:[],
    loading:true,
    types:[],
}

function reducer (state=initialState, action){
    switch(action.type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes:action.payload,
                setRecipes:action.payload,
                loading:false
                
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

               case 'FILTER_ORIGIN':
                const recipesSort = state.setRecipes;
                console.log(recipesSort)
                //const recipeSort1 = state.recipes;
                const filterByOrigin = action.payload ==='database'
                ?recipesSort.filter((e)=> e.createDb)
                :recipesSort.filter((e)=> !e.createDb )
                return{
                    ...state,
                    recipes: filterByOrigin}; 
                
                // case 'FILTER_COOKING':
                // const fil = state.setRecipes;
                // const filterByCooking = action.payload ===='menor45'


            case 'ALPHABETICAL_SORT':
            const filterOrder = action.payload === "ascendente"? 
            state.recipes.sort((a,b)=> a.name.localeCompare(b.name)) 
            : state.recipes.sort((a,b)=>b.name.localeCompare(a.name));
                return {
                    ...state,
                    recipes:filterOrder
                }
          
            case 'SCORE_SORT':
            let sortByAlfa = [...state.recipes]
            sortByAlfa = action.payload === "scoremin"?
            state.recipes.sort(function(a, b){
                if(a.healthScore > b.healthScore) return 1;
                 if(a.healthScore < b.healthScore) return -1;
                    return 0;
                }):
            state.recipes.sort(function(a, b){
                if(a.healthScore < b.healthScore){
                    return 1};
                if(a.healthScore > b.healthScore){
                    return -1};
                    return 0;
                });
            return{
                ...state,
                recipes: sortByAlfa
            };
            
           default:
             return{
                ...state
            }
    }
}
export default reducer;