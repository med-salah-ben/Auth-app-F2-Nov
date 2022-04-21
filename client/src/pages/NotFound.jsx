import React from 'react'
import ImgNotF from "../assets/NotFound404.jpg"

const NotFound = () => {
  return (
    <div>
        <img style={{height:"90vh" , width:"100%"}} src={ImgNotF} alt='notFound' />
    </div>
  )
}

export default NotFound