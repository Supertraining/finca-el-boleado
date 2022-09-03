import React from 'react'


export const Item = (props) => {

    return (
    <>
        <img src={props.img} alt="" />
        <div className='border rounded p-3 my-2 h-100'>
        <h5>{props.titulo}</h5>
        <p><b>Características:</b>  {props.caracteristicas}</p>
        <p><b>Valor:</b> ${props.valor}</p>
        </div>
    </>
  )
}
