import React, { useState } from 'react';
import Card from '../Card/Card';

interface Todo{
    number: number;
    list:string;
}
const Home = () => {
   
    const [value,setValue] =useState<Todo>({
    number:0,
    list:""
    })
    const [todo,setTodo] =useState <Todo[]>([])
   const  onChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
       setValue({...value,[e.target.name]:e.target.value})
   }
   const handleRemove =(id: number)=>{
        const newTodoList = todo.filter((todo)=>todo.number !== id)
        setTodo(newTodoList)
   }
    const handleClick= () => {
        setTodo([...todo,value]);
        setValue({number:value.number+1,
            list:""})
       
        
    }
  
    return (
        <div>
            <div className="form">

            <input style={{height:"40px",width:"30%"}} value={value.number} type="number" name="number" onChange={onChange} />
            <input style={{height:"40px",width:"30%"}} value={value.list} type="text" name="list" onChange={onChange} />
            <button style={{margin:"10px",width:"80px",height:"30px"}} onClick={handleClick}>Add</button>
            </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                {
                todo.map((td)=><Card key={td.number} number={td.number} list={td.list} handleRemove={handleRemove}/>)
                }
                </div>
           
        </div>
    );
};

export default Home;