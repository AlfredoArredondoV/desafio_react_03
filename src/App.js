import { useEffect, useState } from "react";
import './App.css';
// import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Item from "./components/Item.jsx";
import {BaseColaboradores} from "./components/Colaboradores"

const App = () => {
  const [todos, setTodos] = useState(BaseColaboradores);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleSearch = (id) => {
    id.preventDefault();
    const newArray = todos.filter((todo) => id === todo.id);
    console.log("me diste click");
    setTodos(newArray);
  };

  return (
    <div className="container">
      <div className='navbar'>
            <p className='fs-1 text-white p-2'>Buscador de Colaboradores</p>
            <form className="d-flex p-2" role="search" onSubmit={handleSearch} >
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

      {/* <Header titulo="Buscador de Colaboradores"/> */}
      <Form onSubmit={onSubmit} />
      <Footer titulo="Lista de Colaboradores"/>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              handleSearch={handleSearch}
            />
          );
        })}
      </ul>
      
    </div>
  );
}

export default App;