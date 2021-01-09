
//@ts-check 
import { persistCombineReducers } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import { reducer as cart } from "./cart";
import { reducer as whishlist } from "./whishlist";

const config = {
    key: "root",
    storage: AsyncStorage
};

export default persistCombineReducers(config, {
    cart,
    whishlist
});