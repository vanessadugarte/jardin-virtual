import React, {useState} from 'react';
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";

const App = ({children}) => {

    const [showCart, setShowCart] = useState(false)
    const handleCartView = () => {
        setShowCart(!showCart)
    }


    return (
        <>
            <Navbar handleCartView={handleCartView}/>
            {showCart && <Cart/>}
            {children}
        </>
    );
};

export default App;