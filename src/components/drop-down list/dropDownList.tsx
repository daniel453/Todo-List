import React, { useState } from 'react'
import {expand} from './expandIcon'
import './dropDown.css'

interface dropdownlist {
  options: string[],
  textInDropDown: string,
  onClick: (option: string) => void
}

export const DropDownList = ({options,textInDropDown,onClick}:dropdownlist) => {
  const [selected,setSelected] = useState(textInDropDown)
  const [visible,setVisible] = useState(false)
  
  const selectOption = (option:string) => {
    setSelected(option)
    onClick(option)
  }
  const toggleDropdown = () => {
    setVisible(!visible)
  }
  
  return (
    <div className='dropdown__cont' onClick={toggleDropdown}>
      <p>{selected}</p>
      <figure className={`expand ${visible ? 'active': ''}`}>{expand}</figure>
      <div className={`dropdown__list ${visible ? 'active': ''}`}>
        {options.map((option,i) => <li className='list' key={i} onClick={() => selectOption(option)}>{option}</li>)}
      </div>
    </div>
  )
}