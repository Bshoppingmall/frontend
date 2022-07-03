import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function Purchase(props){

    let state = useSelector((state)=>{return state});
    let dispatch = useDispatch();

    let [wish, setWish] = useState();

    useEffect(()=>{
        const fetchUsers = async () => {
          try{
            const response = await axios.get(
              `http://ec2-3-35-173-137.ap-northeast-2.compute.amazonaws.com:3000/purchase-list?user_id=${props.id}`
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

            {props.id}의 구매목록

            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>상품명</th>
                        <th>구매 날짜</th>
                        <th>배송현황</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wish && wish.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{wish[i].name}</td>
                                    <td>{wish[i].order_date}</td>
                                    <td>{wish[i].status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Purchase;