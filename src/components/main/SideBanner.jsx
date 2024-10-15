import { useSelector } from 'react-redux';
import { SideBannerWrap } from './styled';

const SideBanner = () => {
    const { SideBanner } = useSelector((state) => state.SideBanner);
    return (
        <SideBannerWrap>
            {SideBanner.map((side) => (
                <div className='img-wrap' key={side.id}>
                    <img src={side.img} alt={side.name} />
                </div>
            ))}
        </SideBannerWrap>
    );
};

export default SideBanner;
