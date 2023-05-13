import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Sidebar from './components/SideBar';

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className='container'>
        <Content />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
