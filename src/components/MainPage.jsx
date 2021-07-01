import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {fetchCountries} from "../redux/main";
import Pagination from "./Paginator";
import "./MainPage.css";
import Header from "./Header";
import CountryItem from "./CountryItem";
import styled from "styled-components";


const StyledAnotherApp = styled.div`
  color: ${(props) => props.theme.fontColorMenu};
`

const Main = ({themeToggler}) => {
    const dispatch = useDispatch();
    const countries = useSelector(({main}) => main.countries);

    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(50);

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const filterItems = currentCountry.filter(i => {
        return i.name.toLowerCase().includes(value.toLowerCase());
    });

    const autoHandler = (e) => {
        setValue(e.target.textContent);
        setIsOpen(!isOpen);
    }

    const inputHandler = () => {
        setIsOpen(true);
    }

    React.useEffect(() => {
        dispatch(fetchCouncls
        tries());
    }, []);


    return (
        <div>
            <Header currentCountry={currentCountry} themeToggler={themeToggler}/>
            <div className="inputBlock">
                <input type="text" placeholder="Type your country..." value={value} onClick={inputHandler}
                       onChange={(event) => setValue(event.target.value)}/>
                <div className="autoCompleteMenu">
                    <StyledAnotherApp>
                    <ul>
                        {

                            value && isOpen ?
                                filterItems.map((obj) => <li onClick={autoHandler}>{obj.name}</li>)
                                : null
                        }
                    </ul>
                    </StyledAnotherApp>
                </div>
            </div>
            <div className="flexMain">
                {
                    filterItems.map(obj => <CountryItem key={obj.numericCode} img={obj.flag}
                                                        name={obj.name}
                                                        nativeName={obj.nativeName}
                                                        population={obj.population}/>)
                }
            </div>
                <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>
        </div>
    );
}

export default Main;