import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate();
  
  const handleOnClick = () => {
    navigate('/question/1')
  }
  
  return (
    <div className='menu-image'>
      <div className='menu-text'>
        <h1 className='menu-text-heading'>Build a self care routine<br />suitable for you</h1>
        <p className='menu-text-description'>Take out test to get a personalised self care<br />routine based on your needs.</p>
        <Button
          styling={'menu-btn'}
          onClick={handleOnClick}
          content={'Start the quiz'}
        />
      </div>
    </div>
  )
}

export default Menu
