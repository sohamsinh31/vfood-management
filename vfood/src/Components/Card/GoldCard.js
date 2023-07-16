import React from 'react'
import "./styles.css"

const Goldcard = ({ text1, text2 }) => {
    return (
        <div>
            <h3 className='goldtxt' style={{ width: "76%", float: "left", marginTop: 0, marginLeft: 10 }}>{text1}</h3>
            <div className='bottom'>
                <div className="vl"></div>
                <h3 style={{ float: "right", marginTop: 0, marginRight: 10 }}>{text2}</h3>
            </div>
            <div style={{ clear: "both" }} />
        </div>
    )
}

export default Goldcard