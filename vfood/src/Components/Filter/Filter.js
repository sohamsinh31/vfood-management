import React from 'react'
import Card from '../Card/Card'
import "./styles.css"

const Filter = () => {
    return (
        <div className='ftrmain'>
            <Card className="filterbtn" height={79} width={81}>
                <img className='ftrimg' alt='filter' src='Assets/filter.png'/>
                <h4 className='text'>Filter</h4>  
            </Card>
            <div className="v2"></div>
        </div>
    )
}

export default Filter
