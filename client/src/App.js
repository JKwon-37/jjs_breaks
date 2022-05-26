import './App.css';
import HomePage from './componenets/home';
import {Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='*'element={<Navigate to='/home/' replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
