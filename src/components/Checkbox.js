import Input from "./Input";
import Label from "./Label";

const Checkbox = ({ details, value, checked, onChange }) => {
  return (
    <div>
      {details.map((detail, index) => {
        return (
          <>
            <Input
              name={detail}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              key={index}
              value={value}
            />
            <Label text={detail} />
          </>
        )
      })}
    </div>
  );
}


export default Checkbox;
