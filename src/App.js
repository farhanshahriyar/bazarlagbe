import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Contact from './components/Contact';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Product from './components/Product';
import Footer from './Parts/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Category></Category>
      <Product></Product>
      <Contact></Contact>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
