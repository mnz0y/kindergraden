import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Store = () => {
    const store = useSelector(state => state.store);
    console.log(store);
  return (
    <Row className='contents6' xs={1} md={3}>
        {
             store.map((value, i) =>
             <Col className='store' key={i}>
                 <img src={value.imgUrl} alt="seoulProduct" width={'100%'} />
                     <h4>{value.name}</h4>
                     <p>{value.address}</p>
                     <p>영업시간 : {value.time}<br/>
                        라스트 오더 : {value.lastOrder}
                     </p>
                     <p>{value.tel}</p>
             </Col>
         )
        }
        
    </Row>
  )
}

export default Store