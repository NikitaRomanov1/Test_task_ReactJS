import React from "react";
import { Context } from "../context";
import ImageCard from "../components/ImageCard";
import Pagination from "../components/Pagination";
import "../App.css";
const MainPage = () => {
  // const { state } = React.useContext(Context);
  const {
    posts,
    currentPosts,
    postsPerPage,
    postsLength,
    paginate,
    nextPage,
    prevPage,
  } = React.useContext(Context);

  return (
    <div className="container" style={{ width: "100%" }}>
      <h2>Images</h2>

      {posts.showLoading === true ? (
        <span>loading...</span>
      ) : (
        <div className="grid">
          {currentPosts.map((item) => {
            return (
              <div key={item.id}>
                <ImageCard post={item} />
              </div>
            );
          })}
        </div>
      )}

      <Pagination
        postsPerPage={postsPerPage}
        postsLength={postsLength}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default MainPage;
