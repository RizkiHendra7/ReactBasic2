import {GET_LIST_KOTA} from '../../actions/getDataKota'

//penulisan reducer

const initialState ={
    data : false,
    loading: false,
    errorMessage : false
}

const kota = (state = initialState, action) => { 
    switch (action.type){
        case GET_LIST_KOTA :
            return {
                ...state,
                data : action.payload.data,//payload dari balikan data axios yang dibungkus ke obj payload
                loading : action.payload.loading,
                errorMessage : action.payload.errorMessage
            }
        default:
            return state
    }
}

export default kota 