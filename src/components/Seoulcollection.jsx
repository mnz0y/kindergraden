import React, { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import axios from 'axios'
import data from '../seoulData'

const Seoulcollection = () => {
    const [seoul, setSeoul] =useState(data);
    const [count, setCount] = useState(1);
    const [isHover, setIsHover] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false]);

    return (

        <Container className="contents5" id='Seoul'>
            <h2 className='seoulbg'>DEUS EX MACHINA SEOUL COLLECTION</h2>
            <Row xs={1} md={2} lg={3}>
                {
                    seoul.map((value, i) =>
                        <Col className='seoulProduct' key={i}>
                            <img  onMouseOver={()=>{
                            let copy =[...isHover];
                            copy[i]=true;                        
                            setIsHover(copy)}} onMouseOut={()=>{
                                let copy =[...isHover];
                                copy[i]=false; 
                                setIsHover(copy)}} src={isHover[i]? process.env.PUBLIC_URL + value.hoverUrl : process.env.PUBLIC_URL + value.imgUrl} alt="seoulProduct" width={'70%'} />
                            <div className="seoulText">
                                <h4>{value.title}</h4>
                                <p>{value.color}</p>
                                <p>{value.price.toLocaleString()}원</p>
                            </div>
                        </Col>
                    )
                }
            </Row>
            <Button variant="outline-dark" className="seoulBtn" size="lg"
                onClick={()=>{
                    if(count ===1){
                        axios.get('https://mnz0y.github.io/kindergraden/seoulData_1.json').then((result)=>{
                        let copy =[...seoul, ...result.data];
                            setSeoul(copy);
                            setCount(2);
                        })
                    }else if(count ===2){
                        axios.get('https://mnz0y.github.io/kindergraden/seoulData_2.json').then((result)=>{
                            let copy = [...seoul, ...result.data];
                            setSeoul(copy);
                            setCount(3);
                        })
                    }else {
                        alert('더이상 상품이 없습니다.')
                    }
                }}
            >더보기<span></span></Button>

        </Container>
       
    )
}

export default Seoulcollection