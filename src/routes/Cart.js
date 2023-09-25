import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"
//npm install @reduxjs/toolkit react-redux
//state 한 번에 모아서 관리해주는 라이브러리
function Cart(){

    //ReduxStore 가져와줌
    //state에는 redux 내부 모든 자료 들어있음. 
    //하나의 정보만 가져오고 싶으면 state.user 처럼 지정해주어야함
    let a = useSelector((state)=>{return state})
    console.log(a.cart[1].id)

    return(
        <div>
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
      <td>버튼</td>
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