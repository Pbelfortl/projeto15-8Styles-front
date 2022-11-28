import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { AuthProvider } from "./contexts/authContext";
import { GlobalStyle } from "./GlobalStyles";
import LandingPage from "./LandingPage";
import CartPage from "./CartPage";


function App() {

  const [category, setCategory] = useState({category:"", subCategory:""})
  const [purchaseProducts, setPurchaseProducts] = useState([])
  const [purchaseTotal, setPurchaseTotal] = useState(0)

  return (
    <AuthProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage category={category} setCategory={setCategory}/>} />
          <Route path="/carrinho" element={<CartPage setCategory={setCategory} setPurchaseProducts={setPurchaseProducts} setPurchaseTotal={setPurchaseTotal} />} />
          <Route path="/checkout" element={<Checkout purchaseProducts={purchaseProducts} purchaseTotal={purchaseTotal} />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
