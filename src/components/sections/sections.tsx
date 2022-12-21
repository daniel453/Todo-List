import React from 'react'
import './sections.css'

interface sections {
  sections:string[],
  sectionSelected: string,
  setSelection: (section:string) => void
}
export const Sections = ({ sections, sectionSelected, setSelection }:sections) => {
  return (
    <div className='contSections'>
      { sections.map(section => {
        let isActive = ''
        if(sectionSelected === section) isActive = 'isActive'
        return (
          <p key={section} onClick={ () => setSelection(section) } className={`contSections__section ${isActive}`}>
            {section}
          </p>
          )
      })}
    </div>
  )
}