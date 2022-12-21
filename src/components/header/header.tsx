import React from 'react'
import { InputText } from '../inputText/inputText'
import { useTodos } from '../../hooks/useTodos'
import './header.css'

export const Header = () => {
  const {
    changeText,
    todoState
  } = useTodos()

  return (
    <header>
      <InputText value={todoState.textInput} onChange={changeText} placeholder='Buscar...' type='search'/> 
    </header>
  )
}