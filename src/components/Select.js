const Select = ({ name, options, value, onChange }) => {
    return (
      <select name={name} value={value} onChange={onChange}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>
        }) }
      </select>
    );
};
export default Select;
