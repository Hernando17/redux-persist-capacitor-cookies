# Redux Persist Capacitor Cookies
This library is made by using Capacitor Cookies from Capacitor Core

## Installation Step
### 1. Install
```
npm i redux-persist-capacitor-cookies
```

### 2. Use the library
```
import { persistCapacitorCookies } from "redux-persist-capacitor-cookies";

const tokenCookiesPersistConfig = {
    key: 'tokenCookies',
    storage: persistCapacitorCookies,
}

const rootReducer = combineReducers({
    tokenCookies: persistReducer(tokenCookiesPersistConfig, tokenCookiesSlice),
})

export const store = configureStore({
    reducer: rootReducer,
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)
```
