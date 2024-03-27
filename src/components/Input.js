const Input = ({ name, value, type, onChange }) => {
    return(
      <input name={name} value={value} type={type} onChange={onChange}></input>
    )
}
export default Input
