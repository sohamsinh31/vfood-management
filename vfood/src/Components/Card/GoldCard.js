import React from 'react'
import "./styles.css"

const Goldcard = ({ text1, text2, color = null, width = null }) => {
    return (
        <div>
            <h3 className='goldtxt' style={{ width: width ? width : "76%", float: "left", marginTop: 0, marginLeft: 10 }}>{text1}</h3>
            <div className='rightText'>
                <div className="vl" style={{ borderColor: color }}></div>
                <h3 style={{ float: "right", marginTop: 0, marginRight: 10 }}>{text2}</h3>
            </div>
            <div style={{ clear: "both" }} />
        </div>
    )
}

export default Goldcard