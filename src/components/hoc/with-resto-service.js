import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return(props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService000) =>  {
                        return <Wrapped {...props} RestoService={RestoService000} />
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
    
};

export default WithRestoService;