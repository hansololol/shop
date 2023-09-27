import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase, plusCart, addItem } from "./../store"
//npm install @reduxjs/toolkit react-redux
//state 한 번에 모아서 관리해주는 라이브러리
function Cart(){

    //ReduxStore 가져와줌
    //state에는 redux 내부 모든 자료 들어있음. 
    //하나의 정보만 가져오고 싶으면 state.user 처럼 지정해주어야함
    let a = useSelector((state)=>{return state})
    console.log(a.cart[1].id)
    //useDispatch() : store.js 에서 요청을 보내주는 함수
    let dispatch = useDispatch()

    return(
        <div>
          <h6>{a.user.name} {a.user.age} 의 장바구니</h6>
          <button onClick={()=>{
            dispatch(increase(100))
          }}>버튼</button>
         <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
    {
  a.cart.map(function(a, i){
    return(
    <tr>
      <td>{i+1}</td>
      <td>{a.name}</td>
      <td>{a.count}</td>
      <td>
        <button onClick={()=>{
          dispatch(plusCart(a.id))
        }}>+
        </button>
      </td>
      </tr>
    )
  })
    }
  </tbody>
</Table> 
        </div>
    )
}
export default Cart