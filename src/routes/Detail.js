import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";
import axios from "axios";

function Detail(props){

    let {id} = useParams();
    // let 찾은상품 = props.games.find(x => x.id == id);
    let [탭, 탭변경] = useState(0);
    let dispatch = useDispatch();
    
    let [allGame, setAllGame] = useState('');
    try {
        const response = axios.get('');
        setAllGame(response.data.message);
      } catch (e) {
        console.log("error: ", e);
      }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="#" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.games[id].name}</h4>
                    <p>재고: {props.games[id].stock}</p>
                    <p>가격: {props.games[id].price}</p>
                    <button className="btn btn-danger" style={{marginRight: '5px'}} onClick={()=>{ 
                        // axios({
                        //     method: 'post',
                        //     url: 'http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/add-wishlist',
                        //     data: {
                        //         user_id: 'id',
                        //         product_id: id
                        //     }
                        // });
                     }}>찜하기</button> 
                    <button className="btn btn-danger" onClick={()=>{ 

                     }}>주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0" style={{marginBottom: '10px'}}>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(0); }} eventKey="link0">상세보기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(1); }} eventKey="link1">제품후기</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ 탭변경(2); }} eventKey="link2">Q & A</Nav.Link>
                </Nav.Item>
            </Nav>
            
            <TabContent 탭 = {탭} />

        </div> 
    )
}

function TabContent(props){
    if(props.탭 == 0){
        return (
        <div>상세보기</div>
        )
    }else if(props.탭 == 1){
        return (
        <div>후기</div>
        )
    }else if(props.탭 == 2){
        return (
        <div>Q & A</div>
        )
    }
}

export default Detail;