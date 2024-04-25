import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import data from '../workdata'
import {useNavigate} from 'react-router-dom'

const Works = () => {
  const [info, setInfo] = useState(data);

  console.log(info);
  return (
    <div className='works'>
      <div className="pc">
      <div className="mock1">
        <img src={info[4].img} alt="pc" />
        </div>
      </div>
      <div className="mobile">
        <div className="mock2">
          <img src={info[4].mobileImg} alt="mobile"/>
        </div>
      </div>
      <div className="detail">
        <h2><b>0{info[4].id}.</b><br/>
        {info[4].title}</h2>
        <h5> {info[4].project}</h5>
        <p>
        {info[4].contents}
        </p>
        <div className="btnGroup1">
        
        {/* <Button variant="dark">React</Button>{' '}
        <Button variant="dark">Redux</Button>{' '}
        <Button variant="dark">Slick</Button>{' '}
        <Button variant="dark">Bootstrap</Button>{' '} */}
        </div>
        <div className="btnGroup2">
          
        <Button variant="outline-dark" onClick={()=>{
          window.open(info[4].page)
        }}>Web-Page</Button>{' '}
        <Button variant="outline-dark">Document</Button>{' '}
        </div>

      </div>
      

    </div>
  )
}

export default Works