import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>
        Hey guys let's rock
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </h1>
    </div>
  );
}

export default App;
