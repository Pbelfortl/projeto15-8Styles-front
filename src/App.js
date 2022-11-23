import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import LandingPage from "./LandingPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <TopBar/>
        <SideBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
