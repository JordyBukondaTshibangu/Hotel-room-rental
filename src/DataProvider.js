import React, { createContext } from 'react';


const DataContext = createContext([]);

const DataContextProvider = (props) => {


    return <DataContext.Provider value={}>
        {props.children}
    </DataContext.Provider>
    
}


export default DataContextProvider;
