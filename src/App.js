import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { GlobalStyle } from "./GlobalStyles";
import LandingPage from "./LandingPage";
import CartPage from "./CartPage";
import SideBar from "./SideBar";
import TopBar from "./TopBar";


function App() {
  const [category, setCategory] = useState({category: "", subCategory: ""})

  return (
    <AuthProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <TopBar/>
        <SideBar setCategory={setCategory}/>
        <Routes>
          <Route path="/" element={<LandingPage category={category}/>} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
