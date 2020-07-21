import React, { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import FavouritesPage from "./pages/FavouritesPage";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./context";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState({
    posts: [],
    showLoading: true,
    currentPage: 1,
    postsPerPage: 10,
    amountOfPages: 20,
  });
  // переменные для работы c пагинацией
  let { currentPage, amountOfPages, postsPerPage } = posts;
  const cards = posts.posts;

  const api = `https://picsum.photos/v2/list?page=${currentPage}&limit=${postsPerPage}`;

  // отправляется запрос на сервер, после ответа полученные данные заносятся в state posts
  useEffect(() => {
    const getPosts = async () => {
      const result = await axios(api);

      setPosts({ ...posts, posts: result.data, showLoading: false });
    };

    getPosts();
  }, []);

  // здесь хранятся id избранных постов чтобы менять цвет кнопки
  const [filterColor, setFilterColor] = React.useState([]);

  // state избранные посты
  const [list, setList] = React.useState([]);

  let listItems = [];
  let listId = [];
  // добавление в state избранных постов из localStorage и id избранных постов
  const getDataFromLocalStorage = () => {
    Object.keys(localStorage).map((key) => {
      listItems = [...listItems, JSON.parse(localStorage.getItem(key))];
      listId = [...listId, key];
    });

    setList(listItems);
    setFilterColor(listId);
  };
  // по обновлению страницы взять данные из localStorage
  React.useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  // функция на добавление и удаление из избранных по кнопке (если пост есть в localStorage, то удалить, иначе занести, затем обновляем state цвета кнопки)
  const toggleFavourite = (id, post) => {
    if (localStorage.getItem(id, JSON.stringify(post))) {
      localStorage.removeItem(id);
      getDataFromLocalStorage();

      console.log(list);
    } else {
      localStorage.setItem(id, JSON.stringify(post));
      getDataFromLocalStorage();
    }
  };

  const updateList = (list) => {
    setList(list);
  };
  // функция отправляет запрос с номером страницы, которая была нажата пользователем при пагинации
  const paginate = (pageNum) => {
    setPosts({ ...posts, showLoading: true });
    axios
      .get(`https://picsum.photos/v2/list?page=${pageNum}&limit=10`)
      .then((response) => {
        setPosts({
          ...posts,
          posts: response.data,
          currentPage: pageNum,
          showLoading: false,
        });
      });
  };
  // функция по нажатию на стрелочку вперед с проверкой на последнюю страницу
  const nextPage = () => {
    posts.currentPage == amountOfPages
      ? setPosts({ ...posts, currentPage: currentPage })
      : paginate(posts.currentPage + 1);
  };
  // функция по нажатию на стрелочку назад с проверкой на первую страницу
  const prevPage = () => {
    posts.currentPage == 1
      ? setPosts({ ...posts, currentPage: 1 })
      : paginate(posts.currentPage - 1);
  };

  return (
    <Context.Provider
      value={{
        list,
        toggleFavourite,
        posts,
        updateList,
        filterColor,
        cards,
        paginate,
        prevPage,
        nextPage,
        amountOfPages,
        currentPage,
      }}
    >
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/favourites" component={FavouritesPage} />
            <Route />
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
