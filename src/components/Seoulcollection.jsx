import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Seoulcollection = () => {
    const seoul = useSelector(state => state.seoul);

    return (
       
        
        <Container className="contents5">
            <h2 className='seoulbg'>DEUS EX MACHINA SEOUL COLLECTION</h2>
            <Row xs={1} md={3}>
                {
                    seoul.map((value, i) =>
                        <Col className='seoulProduct' key={i}>
                            <img src={value.imgUrl} alt="seoulProduct" width={'70%'} />
                            <div className="seoulText">
                                <h4>{value.title}</h4>
                                <p>{value.color}</p>
                                <p>{value.price}</p>
                            </div>
                           
                        </Col>
                    )
                }
            </Row>
            <Button variant="outline-dark" className="seoulBtn" size="lg">더보기<span></span></Button>

        </Container>
       
    )
}

export default Seoulcollection