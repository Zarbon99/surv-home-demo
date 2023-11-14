import React from 'react';
import { Carousel, Input } from 'antd';

const { Search } = Input;

const contentStyle: React.CSSProperties = {
  height: '400px',
  //backgroundColor: 'green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundImage: "url('img/home/Homepage_Banner_1.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

const App: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <div style={contentStyle}>
          <div>
            <Search placeholder="input search text" size="large" enterButton />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default App;