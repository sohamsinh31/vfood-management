import React from 'react'

const InnerCard = ({ imageurl, text1, text2 }) => {
    return (
        <div>
            {
                imageurl ? (
                    <div>
                        <div className='foodImage'>
                            <img src={imageurl} width={"297px"} height={"160px"} alt='vfood' />
                        </div>
                        <hr />
                        <h3 style={{ width: "72%", float: "left", marginTop: 0, marginLeft: 10 }}>{text1}</h3>
                        <div className='bottom'>
                            <div className="vl"></div>
                            <h3 style={{ float: "right", marginTop: 0, marginRight: 10 }}>{text2}</h3>
                        </div>
                        <div style={{ clear: "both" }} />
                    </div>
                ) : (<div><h3 style={{ width: "72%", float: "left", marginTop: 0, marginLeft: 10 }}>{text1}</h3>
                    <div className='bottom'>
                        <div className="vl"></div>
                        <h3 style={{ float: "right", marginTop: 0, marginRight: 10 }}>{text2}</h3>
                    </div>
                    <div style={{ clear: "both" }} />
                </div>)
            }
        </div>
    )
}

export default InnerCard