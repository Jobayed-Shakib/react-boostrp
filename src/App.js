import React from 'react';
import './App.css';
import New from './Comphonent/News/New';
import Header from './Comphonent/Header/Header'
import TopHeadlin from './Comphonent/TopHeadline/TopHeadlin';
import Fragmen from './Comphonent/Fragmaen/Fragmen';

function App() {
 
  return (
    <div>
  <TopHeadlin></TopHeadlin>
  <Header></Header>
  <Fragmen></Fragmen>
  <New></New>
    </div>
  );
}

export default App;
