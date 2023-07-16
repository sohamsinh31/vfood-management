import React, { useEffect } from 'react'
import Card from '../../Components/Card/Card'
import NavBar from '../../Components/NavBar/NavBar'
import Text from '../../Components/Welcome/Text'
import InnerCard from '../../Components/Card/InnerCard'
import Filter from '../../Components/Filter/Filter'

import { getData, postData } from '../../Services/Home'

const [data,setData] = useEffect([])

useEffect(() => { 

});
const Home = () => {
  return (
    <div>
      <NavBar />
      <Text />
      <Filter />
      <div className='MainHome'>
        <Card height={"auto"} width={"98%"}>
          <InnerCard imageurl={"Assets/pizza.png"} text1={"Hello"} text2={"Hii"} />
        </Card>
      </div>
    </div>
  )
}

export default Home
