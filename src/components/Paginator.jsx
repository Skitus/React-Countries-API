import "./MainPage.css";
import {useState} from "react";

const Pagination = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumbers = [];
    const [active, setActive] = useState(0);

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (number) => {
        paginate(number);
        setActive(number);
    }

    return (
        <div className="paginatorBlock">
            {
                pageNumbers.map(number => <span  className={active == number ? "numbersPaginator active" : "numbersPaginator"} key = {number} onClick={() => handleClick(number)}>{number}</span>)
            }
        </div>
    );
}

export default Pagination;