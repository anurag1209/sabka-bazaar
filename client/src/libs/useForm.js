import { useState } from "react";

export default function useForm(initial = {}) {
    const [inputs, setInput] = useState(initial);

    function handleChange(event) {
        let { value, name } = event.target;
        setInput({
            ...inputs,
            [name]: value
        })
    }

    return {
        inputs,
        handleChange
    }
}