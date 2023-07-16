import React from 'react'
import Card from '../../Components/Card/Card'
import NavBar from '../../Components/NavBar/NavBar'
import Text from '../../Components/Welcome/Text'
import InnerCard from '../../Components/Card/InnerCard'
import Filter from '../../Components/Filter/Filter'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Text/>
      <Filter/>
      <div className='MainHome'>
        <Card height={"auto"} width={"98%"}>
        <InnerCard imageurl={"Assets/pizza.png"} text1={"Hello"} text2={"Hii"}/>
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
        <Card height={197} width={"98%"}>
          Hii
        </Card>
      </div>
    </div>
  )
}

export default Home
