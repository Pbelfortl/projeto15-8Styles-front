import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import LandingPage from "./LandingPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";


function App() {
  const [category, setCategory] = useState({category: "", subCategory: ""})

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <TopBar/>
        <SideBar setCategory={setCategory}/>
        <Routes>
          <Route path="/" element={<LandingPage category={category}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
