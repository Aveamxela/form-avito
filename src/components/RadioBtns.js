const RadioBtns = ({ id,icon,className,title, labels, name, onChoiceradio, required }) => {
    
    return (
        <>
            <div className="iconAnd">
                <div>{icon}</div>
                <h4>{title}</h4>
            </div>
            <div className="radioBtns">
                {labels.map((label, index, e) => {
                    return (
                        <div key={index}>
                            <input
                                className={className}
                                id={label}
                                type="radio"
                                name={name}
                                value={label}
                                onChange={(e) =>
                                    onChoiceradio(name, e.target.value)
                                }
                                required={required}
                            />
                            <label htmlFor={label}>{label}</label>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default RadioBtns;
