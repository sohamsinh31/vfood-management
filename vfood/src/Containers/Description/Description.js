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

          <div className='buynow'>
              <svg className='innerBuyEclipse' xmlns="http://www.w3.org/2000/svg" width="64" height="56" viewBox="0 0 64 56" fill="none">
                <path d="M63.5 28C63.5 43.1272 49.4618 55.5 32 55.5C14.5382 55.5 0.5 43.1272 0.5 28C0.5 12.8728 14.5382 0.5 32 0.5C49.4618 0.5 63.5 12.8728 63.5 28Z" fill="#3F3636" stroke="url(#paint0_linear_217_65)" />
                <defs>
                  <linearGradient id="paint0_linear_217_65" x1="32" y1="0" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EFE605" />
                    <stop offset="0.526042" stopColor="#FF3B06" />
                    <stop offset="1" stopColor="#E012F2" />
                  </linearGradient>
                </defs>
              </svg>
              <img className='buyimage' src="Assets/buyicon.png" alt='buyicon' width="41.48px" height="34.062px" />
              <h3 className='textbuy'>BUY</h3>
              <img className='moreInfo' src='Assets/MoreInfoButton.png' alt='moreinfo'/>
            </div>
        </div>) : (<div>No data found</div>)
      }
    </div>
  )
}

export default Description
