const RadioBtns = ({ title, labels, name, onChoiceradio }) => {
    
    return (
        <>
            <h5>{title}</h5>
            {labels.map((label, index, e) => {
                return (
                    <div key={index}>
                        <label>{label}</label>
                        <input
                            type="radio"
                            name={name}
                            value={label}
                            onChange={(e) => onChoiceradio(e.target.value)}
                        />
                    </div>
                );
            })}
        </>
    );
};
export default RadioBtns;