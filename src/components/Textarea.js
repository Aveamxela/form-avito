const Textarea = ({ name, value, onChange, required }) => {
    return <textarea name={name} value={value} onChange={onChange} required={required}></textarea>
};
export default Textarea;
