import React from 'react'
import {connect} from 'react-redux'
import {SalesLoaded, SalesRequested} from '../../actions'
import WithRestoService from '../hoc'
import Spinner from '../spinner'
import {withRouter} from 'react-router-dom';


//import Background from '../app/food-bg.jpg';

import './sales-list.css'

class SaleList extends React.Component{ 
    
    

    componentDidMount(){
        this.props.SalesRequested();
        console.log()
        const {RestoService} = this.props;
        RestoService.getSalesItems()
          .then(res => this.props.SalesLoaded(res)) 
        

        //console.log(`sold... ${this.props.soldItems.length}`)

    }

    onShowId(id){
        console.log(id)
    }
    
    render(){
        const {soldItems,loading} = this.props

        if(loading){return <Spinner/>}

        return(
            <> 
                <h1 className='sales__title'>Информация о продажах</h1>
                <div className="sales__item ulHeader">
                    <div className='sales__title ulHeaderPadding1'>№</div>
                    <div className='sales__title ulHeaderPadding2'>Счёт</div>
                    <div className='sales__title ulHeaderPadding3'>Дата</div>                                

                </div>
                <div  className="container sales__list">

                    {
                        soldItems.map(item => 
                            <div 
                                key={item.id} 
                                className="sales__item"                                
                                onClick={() => this.props.history.push('/sales/'+item.id)                                    }                                                          
                            >
                                <div className='sales__title'>{item.id}</div>
                                <div className='sales__title'>{item.total}</div>
                                <div className='sales__title'>{item.date}</div>                                
                            </div>
                        ) 
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soldItems : state.sales,
        loading : state.loading
    }
}

const mapDispatchToProps = {
    SalesLoaded, 
    SalesRequested
}

export default withRouter(WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(SaleList)));
