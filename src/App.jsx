import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Molecules/Header';
import Footer from './components/Molecules/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={''}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
