import React,{useState} from "react";
import Searchbar from "../components/Atoms/Searchbar";
import SearchPopup from "../components/Atoms/SearchPopup";
import "./search.scss";

const Search = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="search">
      <div className="layer">
        <div className="container">
          <div className="searchSection">
            <Searchbar setOpen={setOpen} />
          </div>

          {open && <div className="popupSection">
            <SearchPopup/>
          </div>}
          
        </div>
      </div>
    </div>
  );
};

export default Search;
