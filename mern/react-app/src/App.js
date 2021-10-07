import './App.css';
import UniformList from './components/UniformList';
import React from 'react';

const uniforms = [{
  type: 'Jacket',
  id: '61',
  size: 'large'
},{
  type: 'Gloves',
  id: '62',
  size: 'small'
}];
function App() {
  return (
    <>
      <UniformList uniforms={ uniforms }></UniformList>

    </>
  );
}

export default App;
