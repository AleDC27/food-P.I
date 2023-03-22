import { ALL_RECIPES } from "./actionTypes"

export function recipes(){
    return async function(dispatch){
        try {
            console.log("estamos en action")
            await fetch("http://localhost:3001/recipes")
            .then(result=>result.json())
            .then(data=>dispatch({
                type: ALL_RECIPES,
                payload: data
            }))
        } catch (error) {
            console.log("error "+error.message)
        }
    }
}