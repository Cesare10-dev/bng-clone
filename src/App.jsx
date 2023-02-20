import Header from "./components/Header";
import img1 from "./img/img1.jpg";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <img
        src={img1}
        alt=""
        className="absolute -z-10 inset-0 h-full w-full object-cover"
      />
      <Header />
    </div>
  );
}

export default App;
