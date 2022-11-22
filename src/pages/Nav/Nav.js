import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './Navlist';
import FindProduct from './FindProduct';
import './Nav.scss';

function Nav() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const accessToken = localStorage.getItem('accessToken') && (
    <div
      className="signBar"
      // isToken={isToken}
      onMouseEnter={() => setIsSubMenuOpen(false)}
    >
      <p>Help</p>
      <p>Order Check</p>
      <p>
        <Link to="/main">Logout</Link>
      </p>
      <p>
        <Link to="/login">안녕하세요 회원님!</Link>
      </p>
    </div>
  );
  return (
    <div className="navWrap">
      {accessToken}
      <div className="signBar" onMouseEnter={() => setIsSubMenuOpen(false)}>
        <p>Help</p>
        <p>Order Check</p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="navBox">
        <div className="navLogo" onMouseEnter={() => setIsSubMenuOpen(false)}>
          <Link to="/main">NAWEKE</Link>
        </div>
        <ul className="navMain" onMouseEnter={() => setIsSubMenuOpen(true)}>
          <Link to="/products">
            <li>Running</li>
          </Link>

          <Link to="/products">
            <li>Soccer</li>
          </Link>

          <Link to="/products">
            <li>Basketball</li>
          </Link>
        </ul>
        <div className="navRight" onMouseEnter={() => setIsSubMenuOpen(false)}>
          <div className="searchArea" onClick={() => setIsSearchBoxOpen(true)}>
            <div className="magnifyimg">
              <img alt="searchimg" src="images/magnifying-glass.png" />
            </div>
            <input className="searchInput" placeholder="Search" type="text" />
          </div>
          <div className="likeObj">
            <img alt="likeObj" src="images/heart.png" />
          </div>
          <div className="likeObj">
            <Link to="/cart">
              <img alt="cart" src="images/shopping-cart.png" />
            </Link>
          </div>
        </div>
      </div>
      {isSearchBoxOpen && (
        <div className="searchBox">
          <div className="searchBoxIn">
            <div className="navLogo">
              <Link to="/main">
                <p
                  className="searchBoxLogo"
                  onClick={() => setIsSearchBoxOpen(false)}
                >
                  NAWEKE
                </p>
              </Link>
            </div>
            <div className="searchMain">
              <div className="magnifyimg">
                <img
                  alt="searchimg"
                  src="images/magnifying-glass.png"
                  onClick={() => setIsSearchBoxOpen(false)}
                />
              </div>
              <input
                type="text"
                placeholder="search"
                id="searchInput"
                onChange={e => {
                  setSearchInput(e.target.value);
                }}
              />
              <FindProduct searchInput={searchInput} />
            </div>
            <div className="closeBox">
              <p onClick={() => setIsSearchBoxOpen(false)}>취소</p>
            </div>
          </div>
          <div className="popularSearchBox">
            <ul className="popularSearch">
              <p>인기검색어</p>
              <li>축구화</li>
              <li>농구화</li>
              <li>런닝화</li>
              <li>경량 운동화</li>
            </ul>
          </div>
        </div>
      )}
      {isSubMenuOpen && (
        <div className="navUnder" onMouseLeave={() => setIsSubMenuOpen(false)}>
          {NAV_LIST.map(nav => {
            return (
              <ul key={nav.id}>
                {nav.list.map(text => {
                  return (
                    <li key={text.id}>
                      <Link to={text.path}>{text.name}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Nav;
