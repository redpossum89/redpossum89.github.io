import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioList from './PortfolioList';
const PortfolioPage = () => {
  const [category, setCategory] = useState('');
  console.log('render');
  console.log(category);
  let navigate = useNavigate();
  function handleClick(item) {
    navigate('/detail', { state: item });
  }
  return (
    <div>
      <ul className='content-category'>
        <li onClick={() => setCategory('')}>all</li>
        <li onClick={() => setCategory('web')}>web</li>
        <li onClick={() => setCategory('logo')}>logo</li>
        <li onClick={() => setCategory('brand')}>brand</li>
      </ul>
      <PortfolioList
        category={category}
        handleClick={handleClick}
      ></PortfolioList>
    </div>
  );
};

export default PortfolioPage;
