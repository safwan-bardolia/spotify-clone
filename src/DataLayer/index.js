import React, {createContext,useContext,useReducer} from "react";

// preparing DataLayer/StateContext
export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (   // children: the component we passed to DataLayer as a child
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

// to get the value from DataLayer (useDataLayerValue: we can use any name)
export const useDataLayerValue = () => useContext(DataLayerContext);