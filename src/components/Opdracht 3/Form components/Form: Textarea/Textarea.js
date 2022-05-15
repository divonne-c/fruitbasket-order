import { useFormContext } from "react-hook-form";

const Textarea = ({ title, id, cols, rows, name }) => {
    const { register } = useFormContext();

    return (
        <>
            <label className="textarea" htmlFor={id}>
                {title}
                <textarea
                    id={id}
                    cols={cols}
                    rows={rows}
                    {...register(name)}
                ></textarea>
            </label>
        </>
    );
};

export default Textarea;
