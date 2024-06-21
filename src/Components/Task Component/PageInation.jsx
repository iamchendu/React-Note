import React, { useState, useEffect } from 'react';

const PageInation = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map(todo => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'Yes' : 'No'}</td>
    </tr>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    if (number === currentPage) {
      return (
        <li key={number} className="active" onClick={() => setCurrentPage(number)} style={{backgroundColor:'red',color:'white',margin:'0px 4px', padding:'5px'}} >
          {number}
        </li>
      );
    } else if (
      number === currentPage - 2 ||
      number === currentPage - 1 ||
      number === currentPage ||
      number === currentPage + 1 ||
      number === currentPage + 2
    ) {
      return (
        <li key={number} onClick={() => setCurrentPage(number)} style={{border:'1px solid black',margin:'0px 2px',padding:'5px'}} >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1> Page Ination </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{renderTodos}</tbody>
      </table>
      <div className="pagination" style={{display:'flex'}}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <ul id="page-numbers" type='none' style={{display:'flex', margin:'2px'}}>{renderPageNumbers}</ul>
        <button onClick={handleNext} disabled={currentPage === pageNumbers.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PageInation;
