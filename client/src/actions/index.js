import axios from "axios";

export function getRecipes(){
    return async function (dispatch)
{
    var json = await axios.get('/recipe')
    return dispatch(
        {
            type: 'GET_RECIPES',
            payload: json.data
        }
        
    )
}}
export function detailRecipe(id){
    return async function (dispatch){
        try {
            const detRecipe = await axios.get(`/recipe/${id}`)
            return dispatch({
                type: 'DETAIL_RECIPE',
                payload: detRecipe.data
                
            })
        } catch (error) {console.error(error)
        }
    }
}
export function setDetailRecipe(){
    return{
        type: 'SET_DETAIL_RECIPE',
        payload:[]
    }
}

export function onSearchName(payload){
    return async function(dispatch){
        try {
            var json=await axios.get(`/recipe?name=${payload}`)
            return dispatch(
                {
                    type:"SEARCHBYNAME",
                    payload: json.data
                }
                
            )
           
        } catch (error) {
            if(error.response)
            // return dispatch({
                alert(error.response.data)
                      
        }
    }
}

export function getTypes(){
    return async function (dispatch){
        var json = await axios.get("/type", {})
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })
    }
}

export function filterByDietType(payload){
    return {
        type: "FILTER_BY_DIET_TYPE",
        payload
    }
};
export function alphabeticalSort(payload){
    return {
        type: "ALPHABETICAL_SORT",
        payload
    }
}
export function filterOrigin(payload){
    return {
        type: "FILTER_ORIGIN",
        payload
    }
}
export function addRecipes(payload){
    return async function(dispatch){
        var json = await axios.post("/recipe", payload)
        return json
    }
}
export function scoreSort(filter){
return async function (dispatch){
    var info = await axios.get(`/recipe/order/${filter}`)
    return dispatch ({
        type:'SCORE_SORT',
        payload:info.data,
    })
}
} 
    
// export function filterByOrigin(payload){
//     return {
//         type: 'FILTER_BY_ORIGIN',
//         payload,
//     }
// }