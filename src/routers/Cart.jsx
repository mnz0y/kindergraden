import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Table, Container, InputGroup, Form, CloseButton } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increse, removeItem, decrese } from '../store';

const Cart = () => {
    const cart = useSelector((state)=> state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    //총주문금액
    function sum(){
        let total=0;
        for(let a=0; a<cart.length; a++){
            let b= cart[a].price*cart[a].amount;
            total+=b;
        }
        return total;
    }
    //배송비
    const [ship, setShip] =useState(2500);
    useEffect(()=>{
        function Shipping(){
            if(sum()>=50000){
                setShip(0);
            }else{setShip(2500)}
        }
        Shipping();
    });

    
   
    return (
        <>
            <Container className='cart'>
                <h2>장바구니</h2>
                <Row xs={1} md={2} >
                    <Col className='leftSide'>
                        <Table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>제품명</th>
                                    <th>수량</th>
                                    <th>가격</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((value,i)=>
                                       <tr key={i}>
                                    <td><img src={value.imgUrl } alt="장바구니이미지" width={'150px'} /></td>
                                    <td>{value.title}-{value.color}</td>
                                    <td>
                                        <InputGroup className="mb-3">
                                            <Button variant="outline-dark" onClick={()=>dispatch(decrese(value.id))}>-</Button>
                                            <Form.Control aria-label="number" value={value.amount} readOnly></Form.Control>
                                            <Button variant="outline-dark" onClick={()=>dispatch(increse(value.id))}>+</Button>
                                        </InputGroup>
                                    </td>
                                    <td>{[(value.price)*(value.amount)].toLocaleString()}원</td>
                                    <td><CloseButton aria-label="Close" onClick={()=>{
                                        dispatch(removeItem(value.id));
                                    }} /></td>
                                </tr> 
                                    )
                                }
                                
                            </tbody>
                        </Table>
                    </Col>
                    <Col className='rightSide' >
                        <Table>
                            <thead>
                                <tr>
                                    <th>총 주문 금액</th>
                                    <td>{sum().toLocaleString()}원
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>배송비</th>
                                    <td>{(ship).toLocaleString()}원</td>
                                </tr>
                                <tr>
                                    <th>총 결제 금액</th>
                                    <td><b>{(sum()+ship).toLocaleString()}원</b></td>
                                </tr>

                            </tbody>
                        </Table>
                        <p>5만원 이상 구매시 무료배송</p>
                        <div className="d-grid">
                            <Button size='lg' variant="outline-dark">구매하기</Button>
                        </div>
                    </Col>
                </Row>
                <Button variant="outline-dark" className='shopping' onClick={()=>{
                    navigate('/');
                }}> 계속 쇼핑하기</Button>

            </Container>
            <div>
                <img src="/img/cartbg.png" alt="bg" width={'100%'} />
            </div>
        </>
    )
}

export default Cart