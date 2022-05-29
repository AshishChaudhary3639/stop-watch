import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Todo = () => {
    const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalCount, setTotalCount] = useState(1)
const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodo= async ()=>{
      let res= await axios.get(`https://s470f1.sse.codesandbox.io/todos?_page=${page}&_limit=${limit}`)
      setTodos(res.data);
      setTotalCount(Number(res.headers["x-total-count"]))
    }
    getTodo()
  }, [page,limit])
  
  return (
    
    <div className="App">
       <button  disabled={page<=1} onClick={()=>{
          if(page >1){
            setPage(page-1)
          }}}>{"<"}
      </button>
      <select onChange={(e)=>setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <button disabled={page*5 >totalCount} onClick={()=>setPage(page+1)}>{">"}</button>
      {todos.map((todo)=>(
        <div key ={todo.id}>{todo.value}</div>
      ))}
     
    </div>
  );
}

export default Todo