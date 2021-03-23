
const initialState = {
    menu : [ ],
    loading : true,
    items: [ ],
    sales: [ ]
}

const reducers = (state=initialState, action) => {
    console.log(state);
    switch(action.type){
        case 'MENU_LOADED' : 
            return {
                ...state,
                menu : action.payload,
                loading :false
            }
        case 'MENU_REQUESTED' : 
            return{
                ...state,
                menu : state.menu,
                loading : true
            }

        case 'SALES_LOADED' : 
            return{
                ...state,
                sales : action.payload,
                loading : false                
            }

        case 'SALES_REQUESTED' : 
            return {
                ...state,
                sales : state.sales,
                loading : true
            }

        case 'ITEM_ADD_TO_CART' :            
            const id = action.payload
            const checkItem = state.items.find(item => item.id === id)
            if(checkItem === undefined){
                const item = state.menu.find(item => item.id === id)

                const newItem = {
                    title : item.title,
                    price : item.price,
                    url : item.url,
                    id : item.id,
                    qty : 1,
                    limit : true                  
                }
    
                return {
                    ...state, 
                    items : [
                        ...state.items, newItem
                    ]
                }
            }

            const checkItems = state.items.map(item => (item.id === checkItem.id) ? (
                 (item.qty<9) ? ({...item, qty : item.qty+1, limit : true})  : ({...item, limit : false})) 
                     : item)

            return {
                ...state,
                items :  checkItems
            }


        case 'ITEM_DELETE_FROM_CART' :
            const idItem = action.payload
            const menuAfterDelete = state.items.filter(item => item.id !== idItem)
            return {
                ...state,
                items : menuAfterDelete
            }

        case 'ITEM_CHANGE_QUANTITY':
            const idQty = action.payload
            const qtyNew = action.qty
            const itemsNewItemQuantity = state.items.map(item => (item.id === idQty) ? ({...item, qty : qtyNew}) : item)
            const itemsNewItemQuantityWithLimit = itemsNewItemQuantity.map(item => 
                (item.qty<9) ? ({...item, limit : true})  : item
            )
            

            return {
                ...state,
                items : itemsNewItemQuantityWithLimit
            }
        
        case 'EMPTY_CART' :                        
            return {
                ...state,
                items : []
            }
            
        default : 
          return state
    }
}

export default reducers;