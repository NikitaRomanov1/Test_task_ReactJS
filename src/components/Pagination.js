import React from "react";

const Pagination = ({
  paginate,
  nextPage,
  prevPage,
  amountOfPages,
  currentPage,
}) => {
  const pageItems = [];
  for (let num = 1; num <= amountOfPages; num++) {
    currentPage === num
      ? pageItems.push(
          <li className="active indigo" key={num}>
            <a
              href="#"
              onClick={() => {
                paginate(num);
              }}
            >
              {num}
            </a>
          </li>
        )
      : pageItems.push(
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
        );
  }
  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <ul className="pagination center">
        <li className="waves-effect">
          <a href="#!" onClick={() => prevPage()}>
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {pageItems}
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
