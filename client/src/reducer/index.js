const initialState={
    recipes:[],
    setRecipes:[],
    stateDetailRecipe:[],
    loading:true,
    types:[],
    filtrado:[]
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
                const recipesSort = state.recipes;
                const filterByOrigin= action.payload === 'all'
                ?recipesSort: action.payload === 'api' 
                ?recipesSort.filter((e)=> e.createDb===false)
                :recipesSort.filter((e)=>e.createDb===true)
                return{
                    ...state,
                    pokemons: filterByOrigin[0]?filterByOrigin:[{msg:`there is no recipe created, please create a new recipe`}],
                    recipes:filterByOrigin
                }
                // case FILTER_BY_ORIGIN:
                //     const allPokemons1= state.pokemonsAll;
                //     const filterPokemonOrigin=
                //     action.payload === 'all' 
                //     ?allPokemons1
                //     :action.payload === 'api'
                //     ? allPokemons1.filter(elem=> isNaN(elem.id)===false)
                //     :allPokemons1.filter(elem=> isNaN(elem.id)!==false)
                //     return {
                //         ...state,
                //         pokemons: filterPokemonOrigin[0]?filterPokemonOrigin:[{msg: ` there is no pokemon created, please create a new pokemon`}],
                //         filtrados1:filterPokemonOrigin
        
                //       };
                
               
            
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