import "./FruitTemplate.css";
import Counter from "../Opdracht 3/Counter/Counter";

const FruitTemplate = ({ image, name, fruitAmount, setFruitAmount }) => {
    return (
        <>
            {/*/////////////// Template for fruit /////////////////*/}
            <div className="fruit-container">
                <div className="fruit">
                    <h1>{image}</h1>
                    <p>{name}</p>
                </div>
                <Counter fruitAmount={fruitAmount} setFruitAmount={setFruitAmount} />
            </div>
        </>
    );
};

export default FruitTemplate;
