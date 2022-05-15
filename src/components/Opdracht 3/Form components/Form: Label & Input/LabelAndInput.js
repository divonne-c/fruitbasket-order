import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const LabelAndInput = ({
                           title,
                           classnameLabel,
                           classnameInputContainer,
                           id,
                           type,
                           name,
                           options,
                           ...otherProps
                       }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <label className={classnameLabel} htmlFor={id}>
                <div className={classnameInputContainer}>
                    {title}
                    <input
                        type={type}
                        id={id}
                        {...register(name, options)}
                        {...otherProps}
                    />
                </div>
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({ message }) => <p className="error-message">{message}</p>}
                />
            </label>
        </>
    );
};

export default LabelAndInput;
