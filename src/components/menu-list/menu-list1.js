import React from 'react'
import {connect} from 'react-redux'
import {MenuLoaded} from '../../actions'
import {WithRestoService} from '../hoc'
import Spinner from '../spinner'

////actions

const MenuLoaded = (newMenu) => 
({
    type : 'MENU_LOADED',
    payload : newMenu    
})

const MenuLoading = () => 
({
    type : 'MENU_LOADING'
})
    
import {MenuLoaded, MenuLoading}

////reducer
const initialize = {
    menu : [],
    loading : true
}

const reducer = (state = initialize, action)  => {
    switch(action.type) {
        case 'MENU_LOADED': 
          return{
              menu : action.payload,
              loading : false
          }

        case 'MENU_LOADING' :
            return {
                menu : state.menu,
                loading : true
            }

        default : 
          return state;
    }
}
/////////

class MenuList extends Component{
    componentDidMount(){
        this.props.MenuLoading()
        const {RestoService} =this.props
        RestoService.getMenuItems()
          .then(res => this.props.MenuLoaded(res))

    }

    render(){
        const {items, loading} = this.props;
        if(loading) {return <Spinner />}

        return(
            items.map(item => 
                <MenuListItem 
                   key={item.id}
                   item={item}
                />
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items : state.menu
    }
}

const mapDispatchToProps = {    
        MenuLoaded,
        MenuLoading
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(MenuList))