/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/header.js';
import Todo from './components/todo/todo-connected.js';
import Footer from './components/footer/footer.js';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Todo />
      {/* <Main /> */}
      <Footer />
    </React.Fragment>
  );
}


export default App;