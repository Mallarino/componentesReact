import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Content from './components/ContentComponent';
import Sidebar from './components/SiderBarComponent';
import Navbar from './components/NavbarComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <div>
    <Header />
    <Navbar />
    <div className="container mt-5">
      <div className="row">
        <Sidebar />
        <Content />
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
