import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age:20},
    reducers:{
      changeName(state){
        //state 수정 함수
        //return {name : 'park', age:20}
        state.name = 'park'
       
        //immer.js 라이브러리 사용하기 때문에 가능
      },
      increase(state, action){
        //여러 개 수정 시 , 후 하면 됨
        state.age += action.payload
      }
    }
  })
//함수들이 object 자료형으로 남음
//object 자료형을 변수로 받기. distructuring 문법
 export let {changeName, increase} = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
  })
let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
      reducers:{
        plusCart(state, action){
          let 번호 = state.findIndex((a)=>a.id===action.payload)
           state[번호].count++
        },
        addItem(state, action){
          state.push(action.payload)
        }
      }
  })
  export let {plusCart, addItem} = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer

  }
}) 