import React, { FunctionComponent, ReactElement } from 'react'
import { CloseIcon } from './closeModalIcon'
import './modal.css'

interface propsModal {
  title: string,
  children: ReactElement,
  close_modal: () => void,
  btns_footer: () => ReactElement
}

export const Modal:FunctionComponent<propsModal> = (props) => {
  return (
    <div className='contModal'>
      <div className='modal'>
        <div className='modal__header'>
          <h2>{ props.title }</h2>
          <figure 
            style={{ display: 'flex',alignItems: 'center', cursor: 'pointer' }} 
            onClick={ props.close_modal }
          >
            <CloseIcon />
          </figure>
        </div>

        <div className='modal__main'>
          { props.children }
          <br />
          { props.btns_footer() }
        </div>
      </div>
    </div>
  )
}
