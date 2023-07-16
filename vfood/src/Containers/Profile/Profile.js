import React from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'

const Profile = () => {
    return (
    <div className='container2'>
        <div className='purplebox'>
            <div className='pimg'>
                <img src="Assets/profile.png"></img>
            <h3 className='h3' style={{color:'white'}}>Soham</h3>
            </div>
        </div>
        <div>
            <h2>Details:</h2>
        </div>
        <div className='details'>
            <div className='Loc'>
                <div>
                    <img src="Assets/location.png"></img>
                </div>
                <div>
                    <h3>Ankleshwar,GUJ.</h3>
                </div>
            </div>
            <div className='pno'>
                <div >
                    <img src="Assets/mobile.png"></img>
                </div>
                <div>
                <h3>93883728292</h3>
                </div>
            </div>
            <div className='history'>
                <div>
                    <img src="Assets/history.png"></img>
                </div>
                <div>
                <h3>History</h3>
                </div>
            </div>
            <div className='reward'>
                <div>
                    <img src="Assets/reward.png"></img>
                </div>
                <div>
                <h3>Reward</h3>
                </div>
            </div>
        </div>
        <div>
        <h3>Log out</h3>
        </div>


    </div>
    )
}

export default Profile