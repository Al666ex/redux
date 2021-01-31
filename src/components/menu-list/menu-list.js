import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux'
import WithRestoService from '../hoc'
import {MenuLoaded, Menurequested, AddToCart} from '../../actions'
import Spinner from '../spinner'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        this.props.Menurequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
          .then(res => this.props.MenuLoaded(res))
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
                                    onAddToCart={() => this.props.AddToCart(menuItem.id)}
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
        loading : state.loading
    }
}

const mapDispatchToProps = {
        MenuLoaded,       
        Menurequested,
        AddToCart
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList));