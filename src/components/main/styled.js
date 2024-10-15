import styled from 'styled-components';

export const VisualWrap = styled.div`
    width: 100%;
    position: relative;
    .img-wrap {
        height: 45rem;
        overflow: hidden;
    }
    ul {
        position: absolute;
        right: 300px;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        li {
            height: 60px;
            overflow: hidden;
            box-sizing: border-box;
            cursor: pointer;
            &.active {
                border: 2px solid var(--blue-main);
            }
        }
    }
`;

export const TodaysWrap = styled.div`
    box-sizing: border-box;
    padding: 35px 0px;
    .inner {
        .title-wrap {
            color: #333;
            display: flex;
            align-items: center;
            font-weight: 700;
            user-select: none;
            > h2 {
                font-size: 2.5rem;
                margin-right: 20px;
                position: relative;
                &::after {
                    content: '';
                    height: 40%;
                    width: 1px;
                    position: absolute;
                    right: -12px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #333;
                }
            }
            > p {
                font-size: 1.4rem;
                color: #999;
            }
        }
        .grid-wrap {
            display: grid;
            margin-top: 20px;
            padding: 1.4rem;
            box-sizing: border-box;
            border: 1px solid #ddd;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.2rem;
            grid-template-areas:
                'a a b b'
                'c d e f'
                'g g h i';
            .card {
                width: 100%;
                background-color: #fff;
                border: 1px solid #ddd;
                position: relative;
                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    margin-bottom: 10px;
                }
                &.active {
                    border: 1px solid var(--blue-main);
                    cursor: pointer;
                    .btn-wrap {
                        button {
                            background-color: var(--blue-main);
                            width: 120px;
                            i {
                                margin-left: 8px;
                            }
                        }
                    }
                }
                &.card1 {
                    grid-area: a;
                }
                &.card2 {
                    grid-area: b;
                }
                &.card3 {
                    grid-area: c;
                }
                &.card4 {
                    grid-area: d;
                }
                &.card5 {
                    grid-area: e;
                }
                &.card6 {
                    grid-area: f;
                }
                &.card7 {
                    grid-area: g;
                }
                &.card8 {
                    grid-area: h;
                }
                &.card9 {
                    grid-area: i;
                }
                .btn-wrap {
                    position: absolute;
                    left: 15px;
                    bottom: 15px;
                    button {
                        width: 40px;
                        height: 40px;
                        border: none;
                        color: #fff;
                        background: #999;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;

export const SideBannerWrap = styled.div`
    position: absolute;
    right: 210px;
    top: 510px;
    .img-wrap {
        width: 102px;
        height: 150px;
        overflow: hidden;
        margin-bottom: 10px;
        cursor: pointer;
        img {
            width: 100%;
        }
    }
`;
