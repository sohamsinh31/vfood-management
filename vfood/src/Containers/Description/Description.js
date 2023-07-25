/* eslint-disable */
import React, { useState, useEffect } from 'react'
import "./styles.css"
import { useSearchParams } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import InnerCard from '../../Components/Card/InnerCard'
import Goldcard from '../../Components/Card/GoldCard'
import Back from '../../Components/BackButton/Back'
import { getData, postData } from '../../Services/Description'

const Description = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('q') || '';
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(searchTerm)
      .then((responseData) => {
        if (responseData) {
          setData(responseData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);

  const handleCardClick = () => {
    // Redirect to the description page with the foodId
    window.location.href = `/`;
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <img src='Assets/pizza2.png' alt='' className='demo' />
      <Back onClick={() => handleCardClick()} />
      {data && data.length == 1 ? data.map((val, ind) =>
        <div key={val.id + 3}>
          <Card key={val.id} height={32}>
            <Goldcard key={val.id} text1={val.FoodName} text2={val.Price + "₹"} color={"black"} />
          </Card>

          <Card key={val.id + 1} maxHeight={"129px"}>
            <h2 className='descTxt'>Description:-</h2>
            <div key={val.id + 1} style={{ clear: "both" }}></div>
            <h4 className='descVal'>{val.FoodDescription[0].toUpperCase() + val.FoodDescription.slice(1)}</h4>
            <div key={val.id + 2} style={{ clear: "both" }}></div>
          </Card>

          <Card key={ind} height={32}>
            <Goldcard width={"55%"} key={ind} text1={val.HotelName} text2={val.City} color={"black"} />
          </Card>
        </div>) : (<div>No data found</div>)
      }
    </div>
  )
}

export default Description
