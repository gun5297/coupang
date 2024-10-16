import { useDispatch, useSelector } from 'react-redux';
import { VisualWrap } from './styled';
import { isSelVisual } from '../../store/modules/VisualSlice';
import { useEffect } from 'react';

const Visual = () => {
    const { Visual, selVisual } = useSelector((state) => state.Visual);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setInterval(() => {
            const next = selVisual.id < Visual.length ? selVisual.id + 1 : 1;
            dispatch(isSelVisual(next));
        }, 3000);
        return () => clearInterval(timer);
    }, [selVisual, dispatch, Visual.length]);
    return (
        <VisualWrap>
            <div className='img-wrap'>
                <img src={selVisual.img} alt={selVisual.id} />
            </div>
            <ul>
                {Visual.map((item) => (
                    <li
                        key={item.id}
                        className={item.id === selVisual.id ? 'active' : ''}
                        onMouseEnter={() => dispatch(isSelVisual(item.id))}
                    >
                        <img src={item.minimg} alt={item.id} />
                    </li>
                ))}
            </ul>
        </VisualWrap>
    );
};

export default Visual;
