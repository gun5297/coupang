import { useDispatch, useSelector } from 'react-redux';
import { InnerWrap } from '../../style/styled';
import { TodaysWrap } from './styled';
import { isDelTodayproduct, isSelTodayproduct } from '../../store/modules/TodayproductSlice';

const Todays = () => {
    const { Todayproduct, selTodayProduct } = useSelector((state) => state.Todayproduct);
    const dispatch = useDispatch();
    return (
        <TodaysWrap>
            <InnerWrap className='inner'>
                <div className='title-wrap'>
                    <h2>오늘의 발견</h2>
                    <p>오늘 쿠팡이 엄선한 가장 HOT! 한 상품!</p>
                </div>
                <div className='grid-wrap' onMouseLeave={() => dispatch(isDelTodayproduct())}>
                    {Todayproduct.map((today, idx) => (
                        <div
                            className={
                                today.id === selTodayProduct.id
                                    ? 'card ' + 'card' + (idx + 1) + ' active'
                                    : 'card ' + 'card' + (idx + 1)
                            }
                            key={today.id}
                            onMouseEnter={() => dispatch(isSelTodayproduct(today.id))}
                        >
                            <img src={today.img} alt={today.name} />
                            <div className='btn-wrap'>
                                <button>
                                    {today.id === selTodayProduct.id && '구매하기'}
                                    <i className='xi-angle-right' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </InnerWrap>
        </TodaysWrap>
    );
};

export default Todays;
