import './App.css';
import {Name, LeftMenu, Products, Test } from './components/index'

function App() {
  return (
    <div className='flex'>
      <LeftMenu />
      <div>
      <Name />
      <Products />
      <Test />
      </div>

    </div>
  );
}

export default App;
