import { useForm, FormProvider } from "react-hook-form";
import "./OrderForm.css";
import Button from "../Opdracht 3/Button/Button";
import SelectAndOption from "../Opdracht 3/Form components/Form: Select & Option/SelectAndOption";
import LabelAndInput from "../Opdracht 3/Form components/Form: Label & Input/LabelAndInput";
import Textarea from "../Opdracht 3/Form components/Form: Textarea/Textarea";

const OrderForm = ({ strawberry, banana, apple, kiwi, pears, cherries }) => {
    /////////////// Useform /////////////////
    const methods = useForm({
        defaultValues: {
            "delivery-time": "day",
            age: 0,
        },
    });

    /////////////// Submit Handler /////////////////
    const onFormSubmit = (data) => {
        const fruitData = {
            strawberry: strawberry,
            banana: banana,
            apple: apple,
            kiwi: kiwi,
            pears: pears,
            cherries: cherries,
        };
        console.log(fruitData);
        console.log(data);
    };

    return (
        /////////////// Order Form /////////////////
        <div className="form-container">
            <h2>Verzend je bestelling</h2>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                    {/*/////////////// Form: firstname /////////////////*/}
                    <LabelAndInput
                        title="Voornaam"
                        classnameLabel="label-container"
                        classnameInputContainer="label"
                        id="firstname"
                        type="text"
                        name="firstname"
                        options={{ required: "❗ Veld moet ingevuld zijn" }}
                    />

                    {/*/////////////// Form: lastname /////////////////*/}
                    <LabelAndInput
                        title="Achternaam"
                        classnameLabel="label-container"
                        classnameInputContainer="label"
                        id="lastname"
                        type="text"
                        name="lastname"
                        options={{ required: "❗ Veld moet ingevuld zijn" }}
                    />

                    {/*/////////////// Form: age /////////////////*/}
                    <LabelAndInput
                        title="Leeftijd"
                        classnameLabel="label-container"
                        classnameInputContainer="label"
                        id="age"
                        type="number"
                        name="age"
                        placeholder="0"
                        options={{
                            min: {
                                value: 18,
                                message:
                                    "❗ Je moet minimaal 18 zijn om een bestelling te plaatsen",
                            },
                        }}
                    />

                    {/*/////////////// Form: zipcode /////////////////*/}
                    <LabelAndInput
                        title="Postcode"
                        classnameLabel="label-container"
                        classnameInputContainer="label"
                        id="zipcode"
                        type="text"
                        name="zipcode"
                        options={{ required: "❗ Veld moet ingevuld zijn" }}
                    />

                    {/*/////////////// Form: deliver frequency /////////////////*/}
                    <SelectAndOption
                        name="delivery-frequency"
                        title="Bezorgfrequentie"
                        id="delivery-frequency"
                    >
                        <option value="every week">Iedere week</option>
                        <option value="every two weeks">Om de week</option>
                        <option value="every month">Iedere maand</option>
                    </SelectAndOption>

                    {/*/////////////// Form: deliver time /////////////////*/}
                    <div className="radio-container">
                        <LabelAndInput
                            title="Overdag"
                            classnameLabel="radio-container"
                            classnameInputContainer="radio"
                            id="day"
                            type="radio"
                            name="delivery-time"
                            value="day"
                            options=""
                        />
                        <LabelAndInput
                            title="'s Avonds"
                            classnameLabel="radio-container"
                            classnameInputContainer="radio"
                            id="evening"
                            type="radio"
                            name="delivery-time"
                            value="evening"
                            options={{ required: "❗ Klik een optie aan" }}
                        />
                    </div>

                    {/*/////////////// Form: comments /////////////////*/}
                    <Textarea
                        id="comments"
                        name="comments"
                        title="Opmerkingen"
                        cols="30"
                        rows="10"
                    />

                    {/*/////////////// Form: terms /////////////////*/}
                    <LabelAndInput
                        title="Ik ga akkoord met de Algemene Voorwaarden"
                        classnameLabel=""
                        classnameInputContainer="terms"
                        id="terms"
                        type="checkbox"
                        name="terms"
                        options={{
                            required: "❗ Algemente voorwaardem moet aangevinkt zijn",
                        }}
                    />

                    <Button type="submit" className="submit-btn">
                        Verzend bestelling
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};

export default OrderForm;
