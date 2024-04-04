import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'
import "./styles.css"
import Categories from '../Categories/Categories'
import { getData, postData } from '../../Services/Category';

const Filter = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then((responseData) => {
                if (responseData) {
                    setData(responseData);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(data)

    return (
        <div className='ftrmain'>
            <Card className="filterbtn" height={79} width={81}>
                <img className='ftrimg' alt='filter' src={require(`../../Assets/filter.png`).default} />
                <h4 className='text2'>Filter</h4>
            </Card>
            <div className="v2"></div>
            {data && data.map(cat =>
                <Categories imgurl={require(`../../${cat.imageurl}`).default} text={cat.Title} />
            )
            }
        </div>
    )
}

export default Filter
