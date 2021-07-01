import "./MainPage.css";

const CountryItem = ({img, name, nativeName, population}) => {
    return (
        <div className="countryItem">
            <div>
                <img src={img} className="imgItem"/>
                <p><b>{name}</b></p>
                <p className="nativeName">{nativeName}</p>
                <p><i>{population} people</i></p>
            </div>
        </div>
    );
}

export default CountryItem;
