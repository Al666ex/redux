import React from 'react'
import SaleList from '../sales-list'



//import { dataIndexOf } from 'react-widgets/lib/Accessors'

class SalesPage  extends React.Component{

    state = {error : false}

    componentDidCatch(){
        this.setState({error : true})
    }

    onShowId(id){
        console.log(`${id} from sales-list`)
        console.log(this.props.match)
        //console.log(this.props.location)
    }

    render(){
        if(this.state.error){return (<h1>Error .......... sales-page</h1>)}

        //const {history} = this.props

        return(
            <div className="sales">
                <SaleList                             />                
            </div>
    
        )
    }

}


export default SalesPage;