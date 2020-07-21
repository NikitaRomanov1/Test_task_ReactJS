import React from "react";
import { useHistory } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import { Context } from "../context";

import "../App.css";

const FavouritesPage = () => {
  const history = useHistory();
  const { list, updateList } = React.useContext(Context);

  // достаем данные из localStore чтобы отрисовать помеченные карточки
  React.useEffect(() => {
    updateList(list);
  }, []);

  return (
    <div className="container" style={{ width: "100%" }}>
      <h2>Favourites</h2>
      <div className="grid">
        {list.map((item) => {
          return (
            <div key={item.id}>
              <ImageCard post={item} />
            </div>
          );
        })}
      </div>
      <button className="btn indigo" onClick={() => history.push("/")}>
        Назад
      </button>
    </div>
  );
};

export default FavouritesPage;
