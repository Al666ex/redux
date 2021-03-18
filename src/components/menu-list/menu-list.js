import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
//import {MenuLoaded, Menurequested, AddToCart} from '../../actions'
import * as actions from '../../actions'
import Spinner from '../spinner'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        this.props.Menurequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
          .then(res => this.props.MenuLoaded(res))
          
    }

    onDisable(id){
        const {items} = this.props
        let search;
        if(items.length){            
                let test = items.find(it => 
                it.id === id && it.limit === false                    
            )
            search =  test ?   (search = false) : (search = true)
        }

        if(items === undefined){
            search = true
        }
        
        return search 
    }

    render() {

        const {menuItems, loading} = this.props;
        if(loading){
            return <Spinner />
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return  <MenuListItem 
                                    key={menuItem.id}  
                                    menuItem={menuItem}  
                                    onDisable={this.onDisable(menuItem.id)}
                                    onAddToCart={() => {
                                        this.props.AddToCart(menuItem.id) 
                                    } 
                                    }
                                />
                    })
                }
                
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems : state.menu,
        loading : state.loading,
        items : state.items
    }
}

// const mapDispatchToProps = {
//         MenuLoaded,       
//         Menurequested,
//         AddToCart       
// }

export default WithRestoService()(connect(mapStateToProps,actions)(MenuList));