import React from 'react'

function Featurebox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='' />
        </div>
        <div className='a-b-text'>
            <h2> {props.title} </h2>
            <p>sfjbjhb,jk kjn,kjn jkbj uighui kjhbjk fyfgy jhbv jhvh</p>
        </div>
      
    </div>
  )
}

export default Featurebox
