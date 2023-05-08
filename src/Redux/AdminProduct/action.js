import axios from 'axios'
import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from './actionTypes'

//watches
export const getProductsWatch=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("http://localhost:8080/watches",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for jewellery

export const getProductsjewellery=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("http://localhost:8080/jewellery",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//gift

export const getProductsgift=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("http://localhost:8080/Products",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}



//for post watch product

export const addProductWatch=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.post("http://localhost:8080/watches",data).then((res)=>{
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

// for post watch to endpoint product

export const addProductWatchToProduct=(data)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.post("http://localhost:8080/Products",data).then((res)=>{
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//edit to endpoint products

export const editProductWatchToProduct=(data,id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.patch(`http://localhost:8080/Products/${id}`,data).then((res)=>{
        dispatch({type:EDIT_PRODUCT_SUCCESS,payload:res.data})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}
//edit

export const editProductWatch=(data,id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.patch(`http://localhost:8080/watches/${id}`,data).then((res)=>{
        dispatch({type:EDIT_PRODUCT_SUCCESS,payload:res.data})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//Delete

export const DeleteProductWatch=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.delete(`http://localhost:8080/watches/${id}`).then((res)=>{
        dispatch({type:DELETE_PRODUCT_SUCCESS})
        console.log(res)
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for getting users

export const getUser=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://asos-of6d.onrender.com/users",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

//for getting orders

export const getOrder=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

    axios.get("https://asos-of6d.onrender.com/orders",paramObj).then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}



