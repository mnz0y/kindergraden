import React from 'react'
import { Row, Col, Button, Table, Container, InputGroup, Form, CloseButton } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increse, removeItem } from '../store';

const Cart = () => {
    const cart = useSelector((state)=> state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                                            <Button variant="outline-dark">-</Button>
                                            <Form.Control aria-label="number" value={value.amount}></Form.Control>
                                            <Button variant="outline-dark" onClick={()=>dispatch(increse())}>+</Button>
                                        </InputGroup>
                                    </td>
                                    <td>{(value.price)*(value.amount)}</td>
                                    <td><CloseButton aria-label="Close" onClick={()=>{
                                        dispatch(removeItem());
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
                                    <td>0</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>배송비</th>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <th>총 결제 금액</th>
                                    <td><b>0</b></td>
                                </tr>

                            </tbody>
                        </Table>
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