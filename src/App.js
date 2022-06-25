import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav, Form, NavDropdown, Dropdown } from 'react-bootstrap';
import data from './data.js';
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {

  let [games, setGames] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">BShoppingmall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <NavDropdown title="메뉴" id="basic-nav-dropdown">
              <Dropdown.ItemText>인원별</Dropdown.ItemText>
              <NavDropdown.Item href="#action/3.1">2인</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">3~4인</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">5인 이상</NavDropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.ItemText>장르별</Dropdown.ItemText>
              <NavDropdown.Item href="#action/3.4">협동</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">블러핑</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={()=>{ navigate('/recom') }}>오늘의 추천</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/login') }}>로그인</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/regis') }}>회원가입</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>

            <div className="container">
              <div className="row">
                <Card games={games[0]} img={"1.jpg"}></Card>
                <Card games={games[1]} img={"2.jpeg"}></Card>
                <Card games={games[2]} img={"3.png"}></Card>
              </div>
            </div>
          </div>
        } />
        <Route path="/cart" element={<div>찜목록</div>} />
        <Route path="/detail" element={<Detail games={games} />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>

    </div>
  );
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '/' + props.img} width="150px" height="200px" alt="보드게임 사진"/>
      <h5>{props.games.title}</h5>
      <p>{props.games.price}</p>
      <p>{props.games.content}</p>
    </div>
  );
}

export default App;
