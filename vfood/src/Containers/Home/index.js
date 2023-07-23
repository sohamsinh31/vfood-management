import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import NavBar from '../../Components/NavBar/NavBar'
import Text from '../../Components/Welcome/Text'
import InnerCard from '../../Components/Card/InnerCard'
import Filter from '../../Components/Filter/Filter'
import { getData, postData } from '../../Services/Home'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((responseData) => {
        if (responseData) {
          setData(responseData);
          // console.log(responseData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <Text />
      <Filter />
      <div className='MainHome'>
        {data.map((item) => (
          <Card height={"auto"} width={"98%"}>
            <InnerCard
              key={item.FoodID}
              imageurl={item.ImageURL}
              text1={item.Name}
              text2={item.Price + "₹"}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
