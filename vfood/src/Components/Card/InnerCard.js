import React, { useState } from 'react';

const InnerCard = ({ imageurl, text1, text2 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      {imageurl ? (
        <div>
          <div className='foodImage'>
            <img
              src={require(`../../${imageurl}`).default}
              width='297px'
              height='160px'
              alt='vfood'
              style={{ display: imageLoaded ? 'block' : 'none' }}
              onLoad={handleImageLoad}
            />
            {!imageLoaded && <div>Loading...</div>}
          </div>
          <hr />
          <h3 style={{ width: '70%', float: 'left', marginTop: 0, marginLeft: 10 }}>
            {text1}
          </h3>
          <div className='bottom'>
            <div className='vl'></div>
            <h3 style={{ float: 'right', marginTop: 0, marginRight: 10 }}>{text2}</h3>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      ) : (
        <div>
          <h3 style={{ width: '70%', float: 'left', marginTop: 0, marginLeft: 10 }}>
            {text1}
          </h3>
          <div className='bottom'>
            <div className='vl'></div>
            <h3 style={{ float: 'right', marginTop: 0, marginRight: 10 }}>{text2}</h3>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      )}
    </div>
  );
};

export default InnerCard;
