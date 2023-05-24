import './App.css';
import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row';
import requests from './Components/request';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Nav />
     <Banner />
       <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} /> 
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Footer />
    </div>
  );
}

export default App;
