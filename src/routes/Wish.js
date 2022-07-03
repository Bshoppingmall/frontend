import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function Wish(props){

    let [wish, setWish] = useState();

    useEffect(()=>{
        const fetchUsers = async () => {
          try{
            const response = await axios.get(
              `http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/wishlist?user_id=${props.id}`
            );
            console.log(response.data.message);
            setWish(response.data.message);
          }catch (e){
            console.log("error: ", e);
          }
        };
        fetchUsers();
      },[]);

    return (
        <div>

            {props.id}의 찜목록

            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>재고</th>
                        <th>구매하기</th>
                        <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wish && wish.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{wish[i].name}</td>
                                    <td>{wish[i].price}원</td>
                                    <td>{wish[i].stock}개</td>
                                    <td><button onClick={()=>{
                                        // dispatch(store함수)
                                    }}>+</button></td>
                                    <td><button onClick={()=>{
                                        // dispatch(store함수)
                                    }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Wish;