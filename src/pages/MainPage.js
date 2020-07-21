import React from "react";
import { Context } from "../context";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
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

      {posts.showLoading && (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )}
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
