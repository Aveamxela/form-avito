import Input from "./Input";
import Label from "./Label";

const Checkbox = ({ details, value, checked, onChange }) => {
  return (
    <div>
      {details.map((detail, index) => {
        return (
            <div key={index}
>
                <Input
                    name={detail}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    value={value}
                />
                <Label text={detail} />
            </div>
        );
      })}
    </div>
  );
}


export default Checkbox;
