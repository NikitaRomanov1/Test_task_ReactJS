import React from "react";
import "../App.css";
import { Context } from "../context";
const ImageCard = ({ post }) => {
  const { toggleFavourite, color, filterColor } = React.useContext(Context);

  return (
    <div className="row">
      <div
        className="card "
        style={{
          borderRadius: "8px ",
          overflow: "hidden",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <div className="card-image">
          <img
            src={post.download_url}
            alt="can't find image"
            //style={{ maxHeight: "200px" }}
          />
          <button
            className="btn-floating halfway-fab waves-effect waves-light "
            style={
              filterColor.includes(post.id)
                ? { backgroundColor: "#689f38" }
                : { backgroundColor: "red" }
            }
            onClick={() => {
              toggleFavourite(post.id, post);
            }}
          >
            <i className="material-icons">favorite_border</i>
          </button>
        </div>
        <div className="card-content">
          <span className="card-title">{post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
