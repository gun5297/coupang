import styled from 'styled-components';

export const SearchFormWrap = styled.form`
    .inp-wrap {
        position: relative;
        border: 2.5px solid #4285f4;
        display: flex;
        align-items: center;
        ul {
            position: absolute;
            left: 0;
            top: 41px;
            transform: scaleY(0);
            transform-origin: top;
            transition: all 0.3s;
            overflow: scroll;
            max-height: 700px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
                rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            z-index: 10;
            &.active {
                transform: scaleY(1);
            }
            li {
                display: flex;
                justify-content: start;
                align-items: center;
                height: 30px;
                font-size: 1.2rem;
                box-sizing: border-box;
                background-color: #fff;
                padding: 5px 10px;
                cursor: pointer;
                a {
                    position: relative;
                    &:hover {
                        color: #4285f4;
                        &::after {
                            content: '';
                            width: 100%;
                            height: 1px;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            background: #4285f4;
                        }
                    }
                }
            }
        }
        p {
            cursor: pointer;
            width: 13rem;
            height: 41px;
            font-size: 1.2rem;
            box-sizing: border-box;
            padding: 0px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #333;
            overflow: hidden;
            border-right: 1px solid #ddd;
            > i {
                font-size: 16px;
            }
        }
        input {
            width: 39.2rem;
            height: 41px;
            box-sizing: border-box;
            border: none;
            outline: none;
            padding: 0px 10px;
            font-size: 1.6rem;
        }
        .icon-wrap {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            button {
                border: none;
                background: none;
                margin-left: 10px;
                i {
                    color: #4285f4;
                }
            }
            i {
                cursor: pointer;
                font-size: 20px;
                font-weight: 700;
            }
        }
    }
`;

export const MyMenuWrap = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        cursor: pointer;
        span.cart-length {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: -6px;
            top: -6px;
            background: #4285f4;
            color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            font-size: 1.2rem;
            font-weight: 700;
        }
        &:first-of-type {
            margin-right: 20px;
        }
        i {
            display: block;
            font-size: 3rem;
        }
        em {
            display: block;
            font-size: 1.2rem;
        }
    }
`;

export const SubNavWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 6px 30px;
    ul {
        width: 100%;
        display: flex;
        align-items: center;
        height: 32px;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
            img {
                width: 20px;
                height: 20px;
                margin-right: 0.3rem;
            }
            margin: 0 1rem;
            font-size: 1.2rem;
            a {
                position: relative;
                &:hover {
                    color: #4285f4;
                    &::after {
                        content: '';
                        width: 100%;
                        height: 1px;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        background: #4285f4;
                    }
                }
            }
        }
    }
`;
