
import React from 'react'
import RestoService from '../../services/resto-service'
import Spinner from '../spinner'

class SaleItem extends React.Component{

    state = {
        item : null,
        loading : true
    }

    restoService = new RestoService()

    componentDidMount(){
        this.updateItem()
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps){
        if(prevProps.saleId !== this.props.saleId){
            this.updateItem()
        }
    }

    getData(item) {
        this.setState
            ({
                item,
                loading : false
            })
    }

    updateItem()
    {
        const {saleId} = this.props;
        this.restoService.getSalesItem(saleId)                          
         .then(item => this.getData(item))
         .catch(err => console.log(err))
         console.log(this.state.item)
    }
    
    render(){

        if(this.state.loading){return <Spinner />}

        const {item} = this.state        
        const {id, total, date, description} = item            

        return(
            <div className='"list-group-item"'>
                <h1>{id}</h1>
                <h1>{total}</h1>
                <h1>{date}</h1>
            </div>
        )
    }
}

export default SaleItem;