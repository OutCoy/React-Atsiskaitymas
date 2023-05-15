import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Molecules/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={''}/>
      </Routes>
    </>
  );
}

export default App;
