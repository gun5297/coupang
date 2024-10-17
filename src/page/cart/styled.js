import styled from 'styled-components';

export const CartWrap = styled.div`
    background: ##fafafa;
    .no {
        user-select: none;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top {
        padding: 20px 0px;
        box-sizing: border-box;
        .img-wrap {
            width: 180px;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
    }
    .containner {
        display: block;
        padding: 50px;
        box-sizing: border-box;
        background: #fff;
        width: 100%;
        border: 1px solid #ddd;
        border-top: 2px solid #999;
        .title {
            h3 {
                font-size: 3rem;
                font-weight: 700;
                i {
                    margin-right: 10px;
                }
            }
        }
        .go-product {
            cursor: pointer;
        }
    }
    .cart {
        display: flex;
    }
`;
