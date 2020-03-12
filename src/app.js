/* eslint-disable no-unused-vars */
import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
function App() {
  return (
    <>
      <Header />
      <ToDo />
      <Footer />
    </>
  );
}
export default App;