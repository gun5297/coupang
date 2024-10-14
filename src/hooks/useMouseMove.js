import { useState, useEffect } from 'react';
const useMouseMove = (initialState) => {
    const [state, setState] = useState(initialState || { x: 0, y: 0 });
    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setState({ x: event.x, y: event.y });
        });
        return () => {
            window.removeEventListener('mousemove');
        };
    }, []);
    return state;
};
export default useMouseMove;
