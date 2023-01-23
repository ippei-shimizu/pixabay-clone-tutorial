import "./App.css";
import ImageGallery from "./ImageGallery";
import { useRef, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //API_URL
    const endPonintURL = `https://pixabay.com/api/?key=33059818-517afd886c2c80b9c8f0a6272&q=${ref.current.value}&image_type=photo&pretty=true`;

    //APIをたたく（データフェッチング）
    fetch(endPonintURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を検索する" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
