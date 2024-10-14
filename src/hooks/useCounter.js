// 상태값, 함수 => 내보내기

import { useState } from 'react';

// 재사용, 반복되는 구조
export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);
    const onUp = () => setState(state + 1);
    const onDown = () => {
        setState(state - 1);
    };
    const decrement = () => {
        setState((state) => (state <= 1 ? 1 : state - 1));
    };
    const onReset = () => {
        setState(0);
    };
    return { state, setState, onUp, onDown, onReset, decrement };
};
