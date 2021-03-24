
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
            <div className="sales">
                <h1 className="sales__title">Информация о заказе</h1>
                <div className="sales__item ulHeader">
                    <div className='sales__title ulHeaderPadding1'>№</div>
                    <div className='sales__title ulHeaderPadding2'>Счёт</div>
                    <div className='sales__title ulHeaderPadding3'>Дата</div>                                

                </div>


                <div className="sales__item ulHeader">
                        <div className='sales__title'>{id}</div>
                        <div className='sales__title'>{total}</div>
                        <div className='sales__title'>{date}</div>   
                </div>


                <div  className="container sales__list">

                    {description.map(({id,title,price,qty}) => {
                        return(
                            <div key={id}>
                                <div  className='sales__title sales__item'>{title}</div>
                                <div className="sales__item">ID блюда {id}</div>                                
                                <div className="sales__item">Количество {qty}</div>
                                <div className="sales__item">Цена за еденицу {price}</div>    
                                <div className="sales__item">Стоимость {qty*price}</div>
                            </div>
                        )
                    })}

            </div>

            </div>
        )
    }
}

export default SaleItem;