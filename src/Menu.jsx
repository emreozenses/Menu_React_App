import React from 'react'
import MenuItem from './MenuItem'

const Menu = ({data}) => {
    
  return (
    <div className="section-center">
      {data.map((item) => {
        const { id } = item
        return <MenuItem key={id} {...item} />
      })}
    </div>
  )
}

export default Menu