import React from "react";
import Item from "./Item";


const ItemList = ({ productos }) => {

    return (
        <>
            {
                productos.map((el) => {
                    return (
                        <div key={el.id} className="border rounded p-3 m-2 d-flex flex-column cards">
                            <Item id={el.id} img={el.picture} titulo={el.title} tipo={el.tipo} valor={el.precio} stock={el.stock} />
                        </div>
                    )
                })
            }
        </>
    )
};

export default ItemList