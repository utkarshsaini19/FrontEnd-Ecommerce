import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";
import useOnlineStatus from "../utils/useonlineStatus";

const Header = () => {
  const { user, setSearchValue } = useContext(UserContext);

  // Custom hook useOnlineStatus to get online status of a client as an Extra Feature
  const onlineStatus = useOnlineStatus();
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setSearchValue(inputValue);
  };
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between px-4 py-1 bg-blue-300">
      <div className="relative left-[-10%] md:relative md:left-auto">
        <Link to="/">
          <img className="cursor-pointer" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex py-2">
        <input
          className=" border-solid border-black w-60 mx-3 rounded px-1"
          type="text"
          placeholder="Type to Search..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className=" bg-green-100 w-20 rounded-lg"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>
      <div>
        <ul className="flex">
          <li className="px-1 font-bold cursor-pointer">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="px-1 font-bold cursor-pointer">Home</li>
          </Link>
          <Link to="/contact"><li className="px-1 font-bold cursor-pointer">Contact</li></Link>
          <Link to="/cartPage">
            <li className="px-1 font-bold cursor-pointer">
              Cart-({user.cartData.length})
            </li>
          </Link>
          <li className="px-1 font-bold cursor-pointer">{user?.userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
