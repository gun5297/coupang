import { useState } from 'react';

export const useToggle = () => {
    const [state, setState] = useState(false);
    const onTrue = () => {
        setState(true);
    };
    const onFalse = () => {
        setState(false);
    };
    const onToggle = () => {
        setState(!state);
    };

    const onBool = (x) => {
        setState(x);
    };

    const onToggle1 = (z) => {
        setState((y) => (typeof z === 'boolean' ? z : !y));
    };

    return { state, onTrue, onFalse, onToggle, onToggle1, onBool };
};
