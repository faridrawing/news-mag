import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [catergory, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} category={catergory} />
      <NewsBoard category={catergory} />
    </div>
  );
};

export default App;
