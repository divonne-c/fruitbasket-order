import "./Counter.css";

const Counter = ({ fruitAmount, setFruitAmount }) => {
    /////////////// Function: add fruit /////////////////
    const addFruit = () => {
        setFruitAmount(fruitAmount + 1);
    };

    /////////////// Function: remove fruit /////////////////
    const removeFruit = () => {
        if (fruitAmount) {
            setFruitAmount(fruitAmount - 1);
        }
    };

    return (
        /////////////// Counter Template /////////////////
        <div className="counter">
            <button className="counter-btn" type="button" onClick={removeFruit}>
                -
            </button>
            <p>{fruitAmount}</p>
            <button className="counter-btn" type="button" onClick={addFruit}>
                +
            </button>
        </div>
    );
};

export default Counter;
