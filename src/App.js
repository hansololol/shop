import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js'
import {Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Navbar.Brand href="#home">김한솔</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">메인</Nav.Link>
            <Nav.Link href="/detail">상품상세</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>메뉴3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<div><div className='main-bg'></div>
        <컴포넌트1 shoes={shoes}></컴포넌트1></div>} />
      <Route path='/detail/:id' element={<div><컴포넌트2 shoes={shoes}></컴포넌트2></div>} />
    
      <Route path="/event" element={<About></About>}>
        <Route path='one' element={ <h4>첫 주문 시 양배추즙</h4>}></Route>
        <Route path='two' element={<h4>생일기념 쿠폰</h4>}></Route>

      </Route>
     
      </Routes>

     

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

function 컴포넌트2(props){
  const location = useLocation();
 let {id} = useParams();
  let state = location.state;
  console.log(id)
  let findId=props.shoes.find(function(item){
    return item.id==id;
  })
  return(
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{findId.title}</h4>
        <p>{findId.content}</p>
        <p>{findId.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div>
  );
}

export default App;
