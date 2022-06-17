  const Paginate = props => {
  const pageNumbers = [];

  //https://www.w3schools.com/jsref/jsref_ceil.asp
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          let classes = "page-item ";
          if (number === props.currentPage) {
            classes += "active";
          }

          return (
            <li className={classes}>
              <a
                onClick={() => props.pageSelected(number)}
                href="#/"
                className=""
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginate;