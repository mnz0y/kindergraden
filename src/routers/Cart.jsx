import React from 'react'
import { Row, Col, Button, Table, Container, InputGroup, Form, CloseButton } from 'react-bootstrap';

const Cart = () => {
    return (
        <>
        <Container className='cart'>
            <h2>장바구니</h2>
            <Row xs={1} md={2}>
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
                            <tr>
                                <td><img src="/img/detail/new0-1.jpg" alt="bg" width={'150px'} /></td>
                                <td>FRAGILE WORK CHORE-MULTI</td>
                                <td>
                                    <InputGroup className="mb-3">
                                        <Button variant="outline-dark">-</Button>
                                        <Form.Control aria-label="0" />
                                        <Button variant="outline-dark">+</Button>
                                    </InputGroup>
                                </td>
                                <td>232,000</td>
                                <td><CloseButton aria-label="Close" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col className='rightSide' >
                    <Table>
                        <thead>
                            <tr>
                                <th>총 주문 금액</th>
                                <td>가격</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>총 배송비</th>
                                <td>가격</td>
                            </tr>
                            <tr>
                                <th>총 결제 금액</th>
                                <td>가격</td>
                            </tr>
                        </tbody>
                    </Table>

                </Col>
            </Row>
            <Button variant="outline-dark"> 계속 쇼핑하기</Button>
            
        </Container>
        <div>
                <img src="/img/cartbg.png" alt="bg" width={'100%'} />
            </div>
            </>
    )
}

export default Cart