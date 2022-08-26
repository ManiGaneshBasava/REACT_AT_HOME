import { createStore } from "redux";
import { Reducer } from "./Reducer";
import { persistStore,persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,Reducer)

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store)