import React from 'react';
interface IProps {
    number: number;
    list: string
    handleRemove:(number:number) =>void;
}
const card = {
    backgroundColor:"white",
   width:"300px",
   padding:"10px",
   margin:"10px",
   display:"flex",
   justifyContent:"space-between"
}
const Card = ({number, list,handleRemove}:IProps) => {
    return (
        <div style={card}>
            <h3><b>{number}</b></h3>
            <p>{list}</p>
            <button onClick={()=>handleRemove(number)}>X</button>
        </div>
    );
};

export default Card;