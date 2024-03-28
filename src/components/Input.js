const Input = ({ name, value, type, onChange, required }) => {
    return(
      <input name={name} value={value} type={type} onChange={onChange} required={required}></input>
    )
}
export default Input
