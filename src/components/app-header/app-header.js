import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom'
import {connect}  from 'react-redux'

class AppHeader extends React.Component{
    render(){
        const {items} = this.props;
        const total = items.reduce((sum, current) => sum + (current.price * current.qty), 0)

        return (
            <header className="header">
                <Link className="header__link" to="/">
                    Menu
                </Link>
                <Link className="header__link" to="/cart">
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {total ? total : null} $
                </Link>
            </header>
        )
    
    }

} 

const mapStoreToProps = (state) => {
    return {
        items : state.items
    }
}

export default connect(mapStoreToProps)(AppHeader);
//export default AppHeader;