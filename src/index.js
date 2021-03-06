import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Container />
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)