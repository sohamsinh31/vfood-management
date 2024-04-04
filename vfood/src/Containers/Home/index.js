import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import NavBar from '../../Components/NavBar/NavBar';
import Text from '../../Components/Welcome/Text';
import InnerCard from '../../Components/Card/InnerCard';
import Filter from '../../Components/Filter/Filter';
import { getData, postData } from '../../Services/Home';
import { Grid } from '@mui/material';

const Home = () => {
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

  const handleCardClick = (foodId) => {
    // Redirect to the description page with the foodId
    window.location.href = `/description?q=${foodId}`;
  };

  return (
    <div>
      <NavBar />
      <Text />
      <Filter />
      <div className="MainHome">
        <Grid style={{marginLeft: '0.1%'}} container spacing={2}>
          {data.map((item) => (
            <Card
              key={item.FoodID}
              height={'auto'}
              width={'95%'}
              onClick={() => handleCardClick(item.FoodID)}
            >
              <InnerCard
                imageurl={item.ImageURL}
                text1={item.Name}
                text2={item.Price + '₹'}
              />
            </Card>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
