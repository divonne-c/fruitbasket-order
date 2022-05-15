import React, { useState } from "react";
import OrderForm from "../../components/Opdracht 2/OrderForm";
import Button from "../../components/Opdracht 3/Button/Button";
import "./Order.css";
import FruitTemplate from "../../components/Opdrach 1/FruitTemplate";

const Order = () => {
    /////////////// States /////////////////
    const [strawBerryAmount, setStrawBerryAmount] = useState(0);
    const [bananaAmount, setBananaAmount] = useState(0);
    const [appleAmount, setAppleAmount] = useState(0);
    const [kiwiAmount, setKiwiAmount] = useState(0);
    const [pearsAmount, setPearsAmount] = useState(0);
    const [cherriesAmount, setCherriesAmount] = useState(0);

    /////////////// Reset Button Function /////////////////
    const resetFruitAmount = () => {
        setStrawBerryAmount(0);
        setBananaAmount(0);
        setAppleAmount(0);
        setKiwiAmount(0);
        setPearsAmount(0);
        setCherriesAmount(0);
    };

    /////////////// Fruit Inventory Array /////////////////
    const fruitArray = [
        {
            id: "1",
            image: "🍓",
            name: "Aardbeien",
            fruitAmount: strawBerryAmount,
            setFruitAmount: setStrawBerryAmount,
        },
        {
            id: "2",
            image: "🍌",
            name: "Bananen",
            fruitAmount: bananaAmount,
            setFruitAmount: setBananaAmount,
        },
        {
            id: "3",
            image: "🍏",
            name: "Appels",
            fruitAmount: appleAmount,
            setFruitAmount: setAppleAmount,
        },
        {
            id: "4",
            image: "🥝",
            name: "Kiwi's",
            fruitAmount: kiwiAmount,
            setFruitAmount: setKiwiAmount,
        },
        {
            id: "5",
            image: "🍐",
            name: "Peren",
            fruitAmount: pearsAmount,
            setFruitAmount: setPearsAmount,
        },
        {
            id: "6",
            image: "🍒",
            name: "Kersen",
            fruitAmount: cherriesAmount,
            setFruitAmount: setCherriesAmount,
        },
    ];

    return (
        <>
            {/*/////////////// Fruit Form /////////////////*/}
            <div className="fruit-form-container">
                <div className="fruit-form">
                    {fruitArray.map((fruit) => {
                        return (
                            /////// Fruit Form Template ///////
                            <FruitTemplate
                                key={fruit.id}
                                image={fruit.image}
                                name={fruit.name}
                                fruitAmount={fruit.fruitAmount}
                                setFruitAmount={fruit.setFruitAmount}
                            />
                        );
                    })}
                </div>

                {/*/////// Reset Button ///////*/}
                <Button className="reset-btn" type="button" onClick={resetFruitAmount}>
                    Reset
                </Button>
            </div>

            {/*/////////////// Order Form /////////////////*/}
            <OrderForm
                strawberry={strawBerryAmount}
                banana={bananaAmount}
                apple={appleAmount}
                kiwi={kiwiAmount}
                pears={pearsAmount}
                cherries={cherriesAmount}
            />
        </>
    );
};

export default Order;
