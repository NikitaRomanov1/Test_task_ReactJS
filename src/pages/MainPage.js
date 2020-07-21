import React from "react";
import { Context } from "../context";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import Preloader from "../components/Preloader";

import "../App.css";
const MainPage = () => {
  const {
    posts,
    cards,
    paginate,
    nextPage,
    prevPage,
    amountOfPages,
    currentPage,
  } = React.useContext(Context);

  return (
    <div className="container" style={{ width: "100%" }}>
      <h2>Images</h2>
      {posts.showLoading && <Preloader />}
      <div className="grid ">
        {cards.map((item) => {
          return (
            <div key={item.id}>
              <ImageCard post={item} />
            </div>
          );
        })}
      </div>

      <Pagination
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        amountOfPages={amountOfPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MainPage;
