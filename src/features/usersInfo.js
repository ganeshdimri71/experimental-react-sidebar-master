import { createSlice } from '@reduxjs/toolkit'
import { CustomerDatas } from '../components/customerData'
import { userData } from '../components/userData'


const usersInfo = createSlice( {
    name: 'userInfo',
    initialState: {
        usersData: userData,
        customersData: CustomerDatas
    },
    reducers: {
        setUserData: ( state, action ) => {
            state.usersData = action.payload
        },
        setCustomerData: ( state, action ) => {
            // if(state.customersData.first_name==''||state.customersData.last_name==''||state.customersData.cus_id==''||state.customersData.cus_code==''||state.customersData.region==''||state.customersData.country==''||state.customersData.address=='')
            return state.customersData = action.payload
        },
        changeCustomerData: ( state, action ) => {
            state.customersData[ action.payload.id - 1 ] = action.payload
        },
        changeUserData: ( state, action ) => {
            state.usersData[ action.payload.id - 1 ] = action.payload
        },
        addUserInfo: ( state, action ) => {
            state.usersData = [ ...state.usersData, action.payload ]
        },
        addCustomerInfo: ( state, action ) => {
            state.customersData = [ ...state.customersData, action.payload ]
        },
    }

} );

export const { setUserData, setCustomerData, changeCustomerData, changeUserData, addUserInfo, addCustomerInfo } = usersInfo.actions;

export const getUserData = ( state ) => state.userInfo.usersData;
export const getCustomerData = ( state ) => state.userInfo.customersData;

export default usersInfo.reducer
