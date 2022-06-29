import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function Cart(){

    let state = useSelector((state)=>{return state});
    let dispatch = useDispatch();

    return (
        <div>

            {state.user}의 장바구니

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
                        state.cart.map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
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

export default Cart;