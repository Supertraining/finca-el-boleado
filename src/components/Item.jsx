import React from 'react'
import {Link, useParams} from 'react-router-dom'


export const Item = (props) => {

    return (
      <>
        <Link to={`/item/${props.id}`}>        
          <img src={props.img} alt={props.title} className='img-fluid rounded'/>
        </Link>
        <div className='border rounded p-3 my-2 h-100'>
          <h5>{props.titulo}</h5>
          <p><b>Características:</b>  {props.caracteristicas}</p>
          <p><b>Valor:</b> ${props.valor}</p>
        </div>
      </>
  )
}
