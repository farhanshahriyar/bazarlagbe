import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './Parts/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Category></Category>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
