import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Searchbar from "../components/Atoms/Searchbar";
import SearchPopup from "../components/SearchPopup";
import "./search.scss";

const Search = () => {

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const navigate=useNavigate();

  return (
    <div className="search">
      <div className="layer">
        <div className="container">
          
      <img onClick={()=>{navigate('/')}} className="logoStatic" src={Logo}></img>
          <div className="searchSection">
            <Searchbar input={input} setInput={setInput} setOpen={setOpen} />
          </div>

          {open && <div className="popupSection">
            <SearchPopup input={input} setInput={setInput}/>
          </div>}
          
        </div>
      </div>
    </div>
  );
};

export default Search;
