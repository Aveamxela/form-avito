const Select = ({ options, value, handleChange }) => {
    return (
      <select onChange={handleChange}>
        {options.map(option => {
          return <option>{option}</option>
        }) }
      </select>
    );
};
export default Select;
