import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Paginate from "./Paginate";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        //https://developers.giphy.com/docs/api/endpoint#trending
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "X3mQKrWqQ1VrobDN5zFsjW5HM9gustAz",
            limit: 100
          }
        });

        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 1000);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    return currentItems.map(el => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };
  const renderError = () => {
    if (isError) {
      return (
        //I feel like im close but not quite. 
        <img src="https://media3.giphy.com/media/CoND5j6Bn1QZUgm1xX/giphy.gif?cid=ecf05e47fsoz8kb02my7wkys41vs2l1rwkl4zgife3p1cvnk&rid=giphy.gif&ct=g" />
      );
    };
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "X3mQKrWqQ1VrobDN5zFsjW5HM9gustAz",
          q: search,
          limit: 100
        }
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }

    setIsLoading(false);
  };

  const pageSelected = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="formContainer">
      {renderError()}
      <form className="form">
        <input
          value={search}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
          className="form control"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </form>
      <Paginate
        pageSelected={pageSelected}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
      />
      <div className="container gifs">{renderGifs()}</div>
    </div>
  )
};

export default Giphy;