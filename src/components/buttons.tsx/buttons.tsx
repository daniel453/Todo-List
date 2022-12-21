import React from 'react'
import './buttons.css'

interface buttons { 
  textButton:string, 
  type:'primary' | 'secundary',
  onClick: Function,
  valueToCallback?: any
}
export default function Buttons({ textButton, type, onClick,valueToCallback = '' }:buttons) {
  if(type === 'primary') {
    return (
      <button className='button__1st' onClick={() => onClick(valueToCallback)}>{ textButton }</button>
    )
  }
  return (
    <button className='button__1st' onClick={() => onClick(valueToCallback)}>{ textButton }</button>
  )
}
