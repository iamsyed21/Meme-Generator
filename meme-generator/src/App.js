import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer'
import MainContent from './components/mainContent'
import Header from './components/header'

import './App.scss';


  function App() {
  return (
    <div className = "mainContainer container">
    <Header />
    <MainContent/>
    <Footer/>
    </div>
  );
}

export default App;
