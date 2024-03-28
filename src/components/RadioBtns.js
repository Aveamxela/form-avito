const RadioBtns = ({ id,className,title, labels, name, onChoiceradio }) => {
    
    return (
        <>
            <h4>{title}</h4>
            <div className="radioBtns">
                {labels.map((label, index, e) => {
                    return (
                        <div key={index}>
                            <input
                            className={className}
                                id={index}
                                type="radio"
                                name={name}
                                value={label}
                                onChange={(e) =>
                                    onChoiceradio(name, e.target.value)
                                }
                            />
                            <label htmlFor={index}>{label}</label>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default RadioBtns;