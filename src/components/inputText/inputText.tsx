import React from 'react'
import { search } from './icons'
import './inputText.css'

export interface inputText {
  value: string,
  placeholder: string,
  type: 'search' | 'text',
  onChange: (text:string) => void
}

export const InputText = ({ value, onChange, placeholder, type }:inputText )=> {
  if(type === 'search') {
    return (
      <div className='input__cont'>
        <figure className='iconSearch'>
          {search}
        </figure>
        <input 
          className='input__cont__inputText search' 
          type="text" 
          placeholder={placeholder} 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      )
  }
  return (
    <div className='input__cont'>
      <input 
        className='input__cont__inputText' 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
    )
}