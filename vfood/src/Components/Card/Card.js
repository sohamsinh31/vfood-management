import React from 'react'
import "./styles.css"

const Card = ({ height, width, children }) => {
    return (
        <div className='cardMain' style={{marginLeft:"0.5%",marginRight:"0.5%",opacity: '90%', height: height, width: width, backgroundColor: '#3F3636', borderRadius: '14px',marginTop: "15px" }}>
            {children}
        </div>
    )
}

export default Card
