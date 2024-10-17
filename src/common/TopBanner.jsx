import { TopBannerWrap, TopBarInnerWrap } from '../style/styled';

const TopBanner = ({ onChnageTopBanner }) => {
    return (
        <TopBannerWrap>
            <section className='inner'>
                <div className='img-wrap'>
                    <a href='#'>
                        <img src='images/top-bar/top1.jpg' alt='banner1' />
                    </a>
                    <a href='#'>
                        <img src='images/top-bar/top2.jpg' alt='banner2' />
                    </a>
                </div>
            </section>
            <i className='xi-close' onClick={onChnageTopBanner}></i>
        </TopBannerWrap>
    );
};

export default TopBanner;
