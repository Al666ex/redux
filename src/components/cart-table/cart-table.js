import React from 'react';
import './cart-table.scss';
import './cart-table.css'
import {DeleteItem, ChangeQTY, EmptyCart} from '../../actions'
//import {postData} from '../../services/resto-service'
//import postDate from '../../services/post-service'
import PostDate from '../../services/post-service'

import {connect} from 'react-redux'
import { Combobox, DropdownList  } from 'react-widgets'
import "react-widgets/dist/css/react-widgets.css";
import {invoice} from '../../methods/index'

class CartTable extends React.Component{
    state = {
        quantity : [1,2,3,4,5,6,7,8,9]        
    };

    postDate = new PostDate();

    handleSubmit = (e) => {
        e.preventDefault();
        const {items} = this.props;

        const obj = {
            "name" : "order",
            "invoice" : invoice(items),
            "description" : items
            //"order" : 
        }

        this.postDate.sendData(JSON.stringify(obj))        
         .then(res => {
             console.log(res)
             this.props.EmptyCart()
         })
         .catch(err => console.log(err))
         
    }    

    onVisibleForm = () =>
        <form className='sendOrder' onSubmit={this.handleSubmit}>
            <input type="submit" className="btn btn-primary" value="Отправить" />
        </form> 

    render(){        
        return(
            <>
                <div className="cart__title">Ваш заказ:</div>
                <div className="cart__list">
        
                    {  
                        this.props.items.map(item => {
                            const {title,price,url,category,id, qty} = item;                                                      
                            const {quantity} = this.state                                                    
                            const {DeleteItem,ChangeQTY} = this.props;
                            return(    
                                        <div key={id} className="cart__item">
                                            <img src={url} className="cart__item-img" alt={title}></img>
                                            <div className="cart__item-title">{title}</div>
                                            <Combobox 
                                               data={quantity}
                                               value={qty}  
                                               
                                               onChange={value => {
                                                return ((value>0) && (value<10)) ?  ChangeQTY(id,value) : qty} 
                                               }
                                            />
                                            <div className="cart__item-price">{price*qty}$</div>
                                            <div onClick={() => DeleteItem(id)}  className="cart__close">&times;</div>
                                        </div>
                                   
                            )
                        }) 
                    }
                </div>
                {this.props.items.length ? this.onVisibleForm() : null} 
             </>
            )
    }
    
}

const mapStoreToProps = (store) => {
    return {
        items : store.items
    }
}

const mapDispatchToProps = {
    DeleteItem,
    ChangeQTY,
    EmptyCart
}

export default connect(mapStoreToProps,mapDispatchToProps)(CartTable);

