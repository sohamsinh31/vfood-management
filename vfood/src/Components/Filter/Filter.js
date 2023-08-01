import React from 'react'
import Card from '../Card/Card'
import "./styles.css"
import Categories from '../Categories/Categories'

const Filter = () => {
    return (
        <div className='ftrmain'>
            <Card className="filterbtn" height={79} width={81}>
                <img className='ftrimg' alt='filter' src='Assets/filter.png' />
                <h4 className='text2'>Filter</h4>
            </Card>
            <div className="v2"></div>
            <Categories imgurl={"Assets/pizza3.png"} text={"PIZZA"} />
        </div>
    )
}

export default Filter
