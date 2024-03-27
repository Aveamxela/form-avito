import Input from "./components/Input";
import Select from "./components/Select";
import Textarea from "./components/Textarea";

export default function App() {
    return (
        <>
            <Input />
            <Select options={['option 1', 'option 2', 'option 3']} />
            <Select options={['option 1', 'option 2', 'option 3', 'option 4']} />
            <Textarea />
        </>
    );
}
