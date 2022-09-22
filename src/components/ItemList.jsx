import React from "react";
import { Item } from "./Item";


export const ItemList = ({productos}) => {
    
    return (
            <>
            {
                productos.map((el) => {
                    return (
                <div key={el.id} className="border rounded p-3 m-2 d-flex flex-column w-25"> 
                <Item id = {el.id} img = {el.picture} titulo = {el.title} caracteristicas = {el.descripcion} valor ={el.precio} />
                </div>)
                })
            }
        </>
    )
};
