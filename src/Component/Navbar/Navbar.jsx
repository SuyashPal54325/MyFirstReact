// import React, { useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { Link } from 'react-router-dom'


// const Navbar = () => {
  
  //   const [menu,setMenu]=useState("shop");
  
//   return (
  //     <div className='navbar'>
  //       <div className="nav-logo">
  //         <img src={logo} alt="Logo" />
  //         <p>Shopper</p>
  //       </div>
  //       <ul className='nav-menu'>
  //         <li onClick={()=>{setMenu("shop")}}><link to='/'>Shop</link>{menu==="shop"?<hr/>:<></>}</li>
  //         <li onClick={()=>{setMenu("mens")}}><link to='/mens'>Men</link>{menu==="mens"?<hr/>:<></>}</li>
  //         <li onClick={()=>{setMenu("womens")}}><link to='/womens'>Women</link>{menu==="womens"?<hr/>:<></>}</li>
  //         <li onClick={()=>{setMenu("kids")}}><link to='/kids'>Kids</link>{menu==="kids"?<hr/>:<></>}</li>
  //       </ul>
  //       <div className="nav-login-cart">
  //        <Link to='/login'> <button>Login</button></Link>
  //         <link to='/cart'><img src={cart_icon} alt="cart" /></link>
  //         <div className="nav-cart-count">0</div>
  //       </div>
  //     </div>
  //   )
  // }
  
  // export default Navbar
  
  
  
  
  import React, { useContext, useState } from 'react'
  import './Navbar.css'
  import logo from '../Assests/logo.png'
  import cart_icon from '../Assests/cart_icon.png'
  import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
  
const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPERS</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')}>
          <Link className='nav-menu-connectpage' to='/'>Shop</Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link className='nav-menu-connectpage' to='/mens'>Men</Link>
          {menu === 'mens' && <hr />}
        </li>
        <li onClick={() => setMenu('womens')}>
          <Link className='nav-menu-connectpage' to='/womens'>Women</Link>
          {menu === 'womens' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link className='nav-menu-connectpage' to='/kids'>Kids</Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

