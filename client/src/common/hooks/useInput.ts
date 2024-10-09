import { useState } from "react";

export const useInput = (initialState: string = '') => {
    const [value, setValue] = useState(initialState);

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    
    return {
        value,
        change
    }
}