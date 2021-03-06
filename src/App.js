import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  Form,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import data from "./data.js";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";
import Wish from "./routes/Wish.js";
import Purchase from "./routes/Purchase.js";
import Login from "./routes/Login.js";
import SignUp from "./routes/SignUp.js";

function App() {
  let [games, setGames] = useState(data);
  let [search, setSearch] = useState("");
  let [id, setId] = useState("ju");
  let navigate = useNavigate();
  let [url, setUrl] = useState(
    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/todays-product`
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url);
        setGames(response.data.message);
      } catch (e) {
        console.log("error: ", e);
      }
    };
    fetchUsers();
  }, [url]);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand
            href="/"
            onClick={() => {
              setUrl(
                "http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/todays-product"
              );
            }}
          >
            BShoppingmall
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              onClick={() => {
                setUrl(
                  "http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/todays-product"
                );
              }}
            >
              홈
            </Nav.Link>
            <NavDropdown title="메뉴" id="basic-nav-dropdown">
              <Dropdown.ItemText>인원별</Dropdown.ItemText>
              <NavDropdown.Item
                onClick={() => {
                  setUrl(
                    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/category-people?people=2`
                  );
                }}
              >
                2인
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setUrl(
                    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/category-people?people=3`
                  );
                }}
              >
                3인
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setUrl(
                    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/category-people?people=4`
                  );
                }}
              >
                4인
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setUrl(
                    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/category-people?people=5`
                  );
                }}
              >
                5인
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.ItemText>장르별</Dropdown.ItemText>
              <NavDropdown.Item
                onClick={() => {
                  setUrl(
                    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/category-type?type=전략`
                  );
                }}
              >
                전략
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setUrl(
                    `http://ec2-13-209-12-2.ap-northeast-2.compute.amazonaws.com:3000/category-type?type=협동`
                  );
                }}
              >
                협동
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              장바구니
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/wish");
              }}
            >
              찜목록
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/purchase");
              }}
            >
              구매목록
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/regis");
              }}
            >
              회원가입
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search-input"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <Button
              variant="outline-success"
              onClick={() => {
                navigate("/");
                setUrl(
                  `http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/searchbyname?name=` +
                    search
                );
              }}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {games.map((a, i) => {
                    return <Card key={i} games={games[i]}></Card>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/cart" element={<Cart id={id} />} />
        <Route path="/wish" element={<Wish id={id} />} />
        <Route path="/purchase" element={<Purchase id={id} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail games={games} user={id} />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src="#" width="150px" height="200px" alt="보드게임 사진" />
      <h5>{props.games.name}</h5>
      <p>{props.games.price}</p>
      <p>재고: {props.games.stock}</p>
    </div>
  );
}

export default App;
