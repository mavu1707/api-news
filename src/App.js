import './App.css';

//Importerer fra components mappen
import Main from './components/Main';
import Layout from './components/Layout';
import NewsCard from './components/NewsCard';

//API key
//6f766ef872374052a5bbf58aea921cfb

//<Main> blir lagt som et barnelement til <Layout>
function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default App;
