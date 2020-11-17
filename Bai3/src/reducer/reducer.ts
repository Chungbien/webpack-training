import { combineReducers } from "redux"
import { AppReducer } from "@/App/App.reducer"
import { loginReducer } from "@/pages/Login/Login.reducer"
import { ProductListReducer } from "@/pages/Product/ProductList/ProductList.reducer"
import { productItemReducer } from "@/pages/Product/ProductItem/ProductItem.reducer"

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: ProductListReducer,
  productItem: productItemReducer
})

export default rootReducer
