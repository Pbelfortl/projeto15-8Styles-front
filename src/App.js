import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { AuthProvider } from "./contexts/authContext";
import { GlobalStyle } from "./GlobalStyles";
import LandingPage from "./LandingPage";


function App() {

  const [category, setCategory] = useState({category:"", subCategory:""})

  return (
    <AuthProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage category={category} setCategory={setCategory}/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
