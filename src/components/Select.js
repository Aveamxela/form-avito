const Select = ({ name, options, value, onChange }) => {
    return (
      <select name={name} value={value} onChange={onChange} required>
        {options.map((option, index) => {
          return <option key={index} value={option}>{option}</option>
        }) }
      </select>
    );
};
export default Select;
