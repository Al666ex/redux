
const MenuLoaded = (newMenu) => 
({
    type : 'MENU_LOADED',
    payload : newMenu
})

const Menurequested = () => {
    return{
        type : 'MENU_REQUESTED'
    }    
}

const SalesLoaded = (newSales) => 
({
    type : 'SALES_LOADED',
    payload : newSales
})

const SalesRequested = () => 
({
    type : 'SALES_REQUESTED'
})

const DeleteItem = (id) => {
    return{
        type : 'ITEM_DELETE_FROM_CART',
        payload : id
    }
}

const AddToCart = (id) => {
    return{
        type : 'ITEM_ADD_TO_CART',
        payload : id
    }
}

const ChangeQTY = (id,qty) => {
    return{
        type : 'ITEM_CHANGE_QUANTITY',
        payload : id,
        qty : qty
    }
}

const EmptyCart = () => ({
    type : 'EMPTY_CART'
})

export {MenuLoaded, Menurequested, SalesLoaded, SalesRequested, AddToCart, DeleteItem, ChangeQTY, EmptyCart}