import { configureStore } from '@reduxjs/toolkit'
import userInfo from '../features/usersInfo'

const store = configureStore( {
    reducer: {
        userInfo: userInfo,
    },
    devTools: true,
} );

export default store;