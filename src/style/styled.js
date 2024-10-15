import styled from 'styled-components';

export const HeaderWrap = styled.div`
    width: 100%;
    height: 14.7rem;
    border-bottom: 1px solid #cac6c3;
    .top-bar {
        background-color: var(--top-bar-color);
    }
`;
export const FooterWrap = styled.div`
    width: 100%;
    height: 37.3rem;
    background-color: #000;
`;
export const NavWrap = styled.div`
    .inner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: end;
    }

    .category-btn {
        background: #4285f4;
        width: 11rem;
        height: 11.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        cursor: pointer;
        i {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.4rem;
        }
        em {
            font-size: 1.4rem;
        }
    }
    .right {
        width: 91rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        h1 {
            width: 174px;
            height: 41px;
            margin: 0px 3rem;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                left: 0;
                top: 3px;
            }
        }
    }
`;
export const TopBannerWrap = styled.div`
    border-bottom: 1px solid #cac6c3;
    width: 100%;
    position: relative;
    .inner {
        width: 102rem;
        height: 7rem;
        margin: auto;
        .img-wrap {
            width: 100%;
        }
    }
    .xi-close {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 3rem;
        font-weight: 100;
        cursor: pointer;
    }
`;
export const LayoutWrap = styled.div``;
export const InnerWrap = styled.div`
    width: 102rem;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    h1 {
    }
`;

export const TopBarInnerWrap = styled.section`
    width: 102rem;
    height: 3.2rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            &:not(:last-of-type) {
                margin-right: 0.6rem;
            }
            a {
                font-size: 1.2rem;
            }
        }
    }
`;
