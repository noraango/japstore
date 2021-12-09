import {combineReducers} from 'redux'
export const INCREASE_QUANTITY="INCREASE_QUANTITY"
export const DECREASE_QUANTITY="DECREASE_QUANTITY"
export const GET_ALL_PRODUCT="GET_ALL_PRODUCT"
export const GET_NUMBER_CART="GET_NUMBER_CART"
export const ADD_CART="ADD_CART"
export const DELETE_CART="DELETE_CART"
export const UPDATE_CART="UPDATE_CART"
const initProductCart={
    numberCart: 0,
    carts: [],//item trong gio
}

const cartReducer=(state=initProductCart, action)=>{
    var number;
    switch(action.type){
        case GET_ALL_PRODUCT:
            return{
                ...state,
            }
        case GET_NUMBER_CART:
            return{
                ...state,
            }
        case ADD_CART:
            if(state.numberCart===0){
                let cart={
                    id:action.payload.id,
                    quantity: 1,
                    image:action.payload.image,
                    name:action.payload.name,
                    price:action.payload.price
                }
                state.Carts.push(cart)
            }
            else{
                let check=false;
                state.Carts.map((item,key)=>{
                    if(item.id===action.payload.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart={
                        id:action.payload.id,
                        quantity: 1,
                        image:action.payload.image,
                        name:action.payload.name,
                        price:action.payload.price
                    }
                    state.Carts.push(_cart)
                }
            }
            number= state.numberCart+1;
            localStorage.setItem("total-cart-amount",number)
            return {
                ...state,
                numberCart:number,
            }
        case INCREASE_QUANTITY:
            number= state.numberCart+1;
            localStorage.setItem("total-cart-amount",number)
            console.log(localStorage.getItem("total-cart-amount"))
            return{
                ...state,
                numberCart: number,
                Carts:{
                    ...state.Carts,
                    [action.payload]:{
                        ...state.Carts[action.payload],
                        quantity: state.Carts[action.payload].quantity + 1,
                    }
                }
            }
        case DECREASE_QUANTITY:
            let quantity= state.Carts[action.payload].quantity;
            console.log(localStorage.getItem("total-cart-amount"))
            if(quantity>1){
                let numberItem=quantity - 1;
                number=state.numberCart-1;
                localStorage.setItem("total-cart-amount",number);
                return{
                    ...state,
                    numberCart: number,
                    Carts: {
                        ...state.Carts,
                        [action.payload]: {
                             ...state.Carts[action.payload],
                             quantity: numberItem,
                        },
                    },
                }
            }
            else if(quantity===1){
                number=state.numberCart-1;
                localStorage.setItem("total-cart-amount",number);
                return{
                    ...state,
                    numberCart: number,
                    Carts: state.Carts.filter(item=> item.id!==state.Carts[action.payload].id)
                }
                
            }
            return state; // if not changed return unmutated state
        case DELETE_CART:
            let _quantity= state.Carts[action.payload].quantity;
            number=state.numberCart-_quantity;
            localStorage.setItem("total-cart-amount",number);
            return{
                ...state,
                numberCart:number,
                Carts: state.Carts.filter(item=>{
                    return item.id!==state.Carts[action.payload].id
                })
            }
        default :
            return {
                ...state
            };
    }
}
export default combineReducers({
    carts: cartReducer ,
})