import { useLocalStore } from 'mobx-react';
import React, { ReactNode } from 'react';
import { createStore, TStore } from './createStore';

interface IProps {
    children?: React.ReactNode
}

const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider = ({children}: IProps) => {
    const store = useLocalStore(createStore)
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
    const store = React.useContext(storeContext)

    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('useStore must be used within a StoreProvider.')
    }

    return store
}