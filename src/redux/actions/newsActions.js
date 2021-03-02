import { GET_ALL_NEWS } from "../constants"

export const getAllNewsAction = data => {
    return {
        type: `${GET_ALL_NEWS}_REQUEST`,
        payload: data
    }
}