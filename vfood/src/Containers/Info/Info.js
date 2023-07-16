import React from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'

const OrderPage = () => {
  return (
    <div className='container'>
      <div className='header'>
        <Card height={32} width={29}>
          <a href="#" class="previous round">&#8249;</a>
        </Card>
        <div className='text'><h2>Info</h2></div>
      </div>

      <div className='info'>
        <Card height={311} >
          <h3>Nutritions</h3>
        <table height={252}>
          <tr>
            <td height={39}>Peter</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td >Lois</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td >Lois</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td >Lois</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td >Lois</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td colspan="2">Disclaimer: Nutrition data may differ by ingredients and cooking. Check with a health expert before changing your diet.</td>
          </tr>
        </table>
        </Card>
      </div>
      
      <div id="ques">
        <Card className='faq' height={89} >
        </Card>
        <br/>
        <br/>
        <Card height={89} className='drugcheck' >
        </Card>
      </div>
      
      <div className='hotel'>
        <div className='himg' >
          <img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG.png"height={100}width={100} ></img>
        </div>
        <div>
          <p>Hotel Example:-</p>
          <p>Help desk</p>
          <div className='contact'>
            <div><img src=""height={35}width={35}></img></div>
            <div><img src=""height={35}width={35}></img></div>
            <div><img src=""height={35}width={35}></img></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage