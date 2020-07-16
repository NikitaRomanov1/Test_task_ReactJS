import React from "react";

const Pagination = ({
  postsPerPage,
  postsLength,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(postsLength / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <ul className="pagination">
        <li className="waves-effect">
          <a href="#!" onClick={() => prevPage()}>
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {pageNumbers.map((num) => (
          <li className="waves-effect" key={num}>
            <a
              href="#"
              onClick={() => {
                paginate(num);
              }}
            >
              {num}
            </a>
          </li>
        ))}
        <li className="waves-effect">
          <a href="#!" onClick={() => nextPage()}>
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
