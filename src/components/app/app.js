import React from 'react';
import {MainPage, CartPage, SalesPage, SaleItem} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';


class App extends React.Component{    
    render(){
        return (
            <Router>
        
                <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app img-fluid">            
                    <AppHeader/>
                    
                        <Route exact path='/' component={MainPage}/>                        
                        <Route path='/cart' component={CartPage}/> 

                        <Switch>
                            <Route path="/sales" exact component={SalesPage} />                        
                            <Route path="/sales/:id" render={({match}) => { 
                                console.log(match)
                                const id = match.params.id;
                                return <SaleItem saleId={id} /> } 
                            } />

                        </Switch>

                    
                   

                </div>

            </Router>
            
        )
    }

}


export default App;
//export default App;