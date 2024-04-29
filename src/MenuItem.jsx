import React from 'react'

const MenuItem = (data) => {
    const {id,title,category,price,img,desc} =data;
  return (
    <article className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">${price}</div>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
}

export default MenuItem