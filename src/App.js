import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createContext, useContext, useEffect, useState } from 'react';
import data from './data.js'
import {Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import Cart from './routes/Cart.js'

//context => state 보관함 역할
let Context1=createContext()

//npm install axios - ajax 외부 라이브러리. 간편하게 ajax 사용할 수 있도록 도와줌
function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [재고] =useState([11, 12, 13])
  return (
    <div className="App">
     
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Navbar.Brand href="#home">김한솔</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">메인</Nav.Link>
            <Nav.Link href="/detail">상품상세</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      <Routes>
      <Route path='/' element={<div><div className='main-bg'></div>
        <컴포넌트1 shoes={shoes}></컴포넌트1></div>} />
      <Route path='/detail/:id' element={<div><Context1.Provider value={재고}><컴포넌트2 shoes={shoes}></컴포넌트2></Context1.Provider></div>} />
      
      <Route path="/event" element={<About></About>}>
        <Route path='one' element={ <h4>첫 주문 시 양배추즙</h4>}></Route>
        <Route path='two' element={<h4>생일기념 쿠폰</h4>}></Route>

      </Route>
      <Route path="/cart" element={<div><Cart></Cart></div>}>

      </Route>
     
      </Routes>
      <button onClick={()=>{
        //서버에서 보낸 데이터. axios 라이브러리 이용해서 쉽게 데이터 요청, 가져올 수 있음. 
        //data, status 등 여러 정보를 포함하고 있음. 데이터 값만 가져오려면 변수.data 입력하면 ok!
        axios.get('https://codingapple1.github.io/shop/data2.json').then((data)=>{
          let copy = [...shoes, ...data.data];
          //...괄호 벗겨주는 문법!
         setShoes(copy)})
        .catch(()=>{
          console.log('실패함 ㅅㄱ')
        })
        //숙제 : data3으로 가면 상품 3개 더 나오게. 더보기 버튼 누르면 로딩중 나오도록 띄우기 
      
        //axios.post('/sdad', {name:'kim'})
        //Promise.all([axios.get('/url1'), axios.get('/url2')]).then((결과)=>{})
        //string 자료형만 전송 가능. array나 object는 문자열로 묶어서 전송 --> json 데이터
        //axios 가 자동으로 array로 바꿔주어서 우리가 사용할 수 있는거임
        //fetch 로 가져오면 .then(결과=>결과.json).then(data=>{})로 변환하는 과정 필요! 
     }}>버튼</button>
      

     

    </div>
  );
}
function About(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}

//상품 목록 출력 컴포넌트
function 컴포넌트1(props){

  return(
    <div>
      <Container>
      <Row>
       {
       props.shoes.map(function(a, i){
        return(
        <Col><Link to={'/detail/'+ i }><img src="/shoes1.jpg" width="80%" ></img></Link>
        <h4>{a.title}</h4>
        <p>{a.content}</p>
        <p>{a.price}</p>
        </Col>
        )
       })
     }
     </Row>
    </Container>
  </div>
  );
}

//상품 상세 컴포넌트
function 컴포넌트2(props){
  let 재고 = useContext(Context1)
  useEffect(()=>{
    //랜더링 다 된 이후 실행
    //큰 반복문처럼 시간이 걸리는 것, 어려운 것, 서버에서 데이터를 가져오는 작업, 타이머 장착 등은 나중에 동작하도록 하면 효율 굿
    //컴포넌트 생명주기. 컴포넌트 장착(mount), 업데이트, 제거(unmount) 시 실행되는! => 훅
    //index.js의 <React.StrictMode>를 없애면 2번 실행되지 않음. 
    //핵심 기능이 아닌 부가 기능 sideEffect 에서 따옴. useEffect
    let a = setTimeout(()=>{
      setAlert(false)
      return()=>{clearTimeout(a)}
      //return함수는 unmount시에도 1회 동작
      //useEffect 동작 이전. 먼저 실행됨.
      //기존 불필요한 타임아웃 제거 후 필요한 타임아웃만 실행하기 좋음
      //다른 말로 clean up function라고 부르기도 함. 
    },2000, [count])
    //기존에는 mount, update 되었을 시에 동작
    //[] 내부에 변수를 넣으면 변수가 변경되었을 때에 동작함, 기존에 실행되었을 때랑 변경되었을 때 두 번 동작
    //[] 내부에 변수 넣지 않으면 처음 mount 되었을 때 1회만 동작함
  })
  let[탭, 탭변경]=useState(0);
  let[count, setCount] = useState(0);
  let[alert, setAlert] = useState(true);
  let[숫자, 숫자변경] = useState('');
  const location = useLocation();
 let {id} = useParams();
  let state = location.state;
  console.log(id)
  let findId=props.shoes.find(function(item){
    return item.id==id;
  })
  return(
    <div className="container ">
      {
        alert == true ? 
        <div className='alert alert-warning'>
        2초 이내 구매 시 할인
       </div> : null
      }
       {재고[0]}
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <input type='text' onChange={(e)=>{숫자변경(e.target.value);}}></input>
        {
        isNaN(숫자) ? <div>숫자만 입력부탁</div> :null
        }
        <h4 className="pt-5">{findId.title}</h4>
        <p>{findId.content}</p>
        <p>{findId.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>

    <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
    </Nav.Item>
</Nav>

        <TabContent 탭={탭} shoes={props.shoes}></TabContent>
  </div>
  );
}
function TabContent({탭, shoes}){
 
  let[fade, setFade]=useState('')
  useEffect(()=>{
    let a = setTimeout(() => {
      //automatic batching 기능 리액트 18이상
      //한 번에 state 합쳐서 변경해줌. 
      setFade("end")
    }, 100);
    return ()=>{
      clearTimeout(a)
      setFade("")
      
    }
  },[탭])
  // if(props.탭==0){
  //   return <div >내용0</div>
  // }
  // if(props.탭==1){
  //   return <div>내용1</div>
  // }
  // if(props.탭==2){
  //   return <div>내용2</div>
  // }

  return (<div className={'start ' + fade}>{[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div> ][탭]}</div>)
}

export default App;