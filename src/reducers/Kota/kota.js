import {GET_LIST_KOTA, ADD_KOTA} from '../../actions/kotaAction'

//penulisan reducer

const initialState ={
    dataGetListKota : false,
    loadingGetListKota: false,
    errorMessageGetListKota : false,
    
    dataAddKota : false,
    loadingAddKota: false,
    errorMessageAddKota : false
}

const kota = (state = initialState, action) => { 
    switch (action.type){
        case GET_LIST_KOTA :
            return {
                ...state,
                dataGetListKota : action.payload.data,//payload dari balikan data axios yang dibungkus ke obj payload
                loadingGetListKota : action.payload.loading,
                errorMessageGetListKota : action.payload.errorMessage
            }
            case ADD_KOTA :
                console.log("Masuk reducer add kota",action)
                return {
                    ...state,
                    dataAddKota : action.payload.data,//payload dari balikan data axios yang dibungkus ke obj payload
                    loadingAddKota : action.payload.loading,
                    errorMessageAddKota : action.payload.errorMessage
                }
        default:
            return state
    }
}

export default kota 