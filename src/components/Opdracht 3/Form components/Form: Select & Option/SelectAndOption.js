import { useFormContext } from "react-hook-form";

const Select = ({ title, id, name, children }) => {
    const { register } = useFormContext();

    return (
        <>
            <label htmlFor={id}>
                <div className="select">
                    {title}
                    <select id={id} {...register(name)}>
                        {children}
                    </select>
                </div>
            </label>
        </>
    );
};

export default Select;
