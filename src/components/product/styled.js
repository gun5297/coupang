import styled from 'styled-components';

export const ProductInfoWrap = styled.div`
    width: 1250px;
    box-sizing: border-box;
    padding: 25px 0;
    margin: auto;
    .product_review {
        color: var(--blue-main);
        font-weight: 400;
        font-size: 1.4rem;
    }
    .top-wrap {
        display: flex;
        margin-bottom: 80px;
        .img-wrap {
            width: 556px;
            height: 556px;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .text-wrap {
            width: 694px;
            font-weight: 500;
            box-sizing: border-box;
            padding: 0px 40px;
            > div {
                border-bottom: 1px solid #dcdcdc;
                box-sizing: border-box;
                padding: 10px 0;
            }
            h2 {
                font-size: 1.8rem;
            }
            .review {
                width: 100%;
                padding: 0;
                border-bottom: 2px solid #dcdcdc;
                display: flex;
                align-items: center;
                position: relative;
                padding-bottom: 4px;
            }
        }
        .price {
            > em,
            span {
                color: #999;
                font-weight: 100;
                font-size: 1.4rem;
            }
            > em {
                margin-right: 10px;
            }
            > span {
                text-decoration: line-through;
            }
            p {
                font-size: 1.8rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                span {
                    font-weight: 500;
                }
                &.product_sale_price {
                    color: #cb1400;
                    span {
                        color: #cb1400;
                    }
                }
            }
        }
        .product-cnt {
            span {
                font-weight: 300;
                font-size: 1.4rem;
            }
        }
        .shipping-information {
            .shipping-type {
                font-size: 1.2rem;
                font-weight: 700;
            }
            .shipping-day {
                font-weight: 400;
                font-size: 1.4rem;
            }
        }
        .product_seller {
            p {
                font-size: 1.2rem;
                span {
                    color: var(--blue-main);
                }
            }
        }
        .cj {
            span {
                font-size: 1.4rem;
            }
            margin-bottom: 105px;
        }
        .btn-wrap {
            width: 100%;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.8rem;
            input {
                width: 100px;
                height: 42px;
                box-sizing: border-box;
                border: 1px solid #dcdcdc;
                text-align: center;
                outline: none;
            }
            button {
                width: 250px;
                margin-left: 7px;
                height: 42px;
                cursor: pointer;
                border: 1px solid var(--blue-main);
                font-weight: 700;
                box-sizing: border-box;
                &.cart {
                    color: var(--blue-main);
                    background: #fff;
                    &:hover {
                        color: #0f5ca8;
                        border-color: #0f5ca8;
                    }
                }
                &.buy {
                    color: #fff;
                    background: var(--blue-main);
                    &:hover {
                        background: #0f5ca8;
                    }
                }
            }
        }
    }
    .btm-wrap {
        width: 100%;
        margin-bottom: 300px;
        .tab-menu-wrap {
            width: 100%;
            border-top: 2px solid #000;
            margin-bottom: 80px;
            ul {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25%;
                height: 50px;
                font-weight: 700;
                color: #555;
                background: #fafafa;
                border: 1px solid #ccc;
                cursor: pointer;
                &.active {
                    background: #fff;
                    border: none;
                    border-left: 1px solid #ccc;
                }
            }
        }
        .product_info_img {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
`;
export const ProductListWrap = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
export const ProductItemWrap = styled.li`
    width: 24%;
    margin-right: 1%;
    margin-bottom: 5%;
    height: 500px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.005);
        .product_name {
            color: var(--blue-main);
        }
    }
    div {
        margin-bottom: 3px;
    }
    .img-wrap {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .shipping-information {
        margin-bottom: 6px;
        p {
            font-size: 1.2rem;
            color: #999;
        }
    }
    .product_name {
        p {
            font-size: 1.4rem;
        }
    }
    .price {
        font-size: 1.2rem;
        .sale {
            margin-right: 6px;
            color: #cb1400;
            text-decoration: none;
        }
        em {
            margin-right: 6px;
        }
        span {
            text-decoration: line-through;
            color: #999;
        }
        .product_sale_price {
            font-size: 1.8rem;
            font-weight: 700;
            color: #cb1400;
        }
    }
    .review {
        display: flex;
        align-items: center;
        span {
            font-size: 1.2rem;
            color: #999;
        }
    }
    .shipping {
        font-size: 1.4rem;
        margin-bottom: 8px;
    }
`;
export const RecommendedWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    h2 {
        font-size: 2rem;
        text-align: center;
        margin-bottom: 20px;
        span {
            color: var(--red-main);
            font-weight: 700;
        }
    }
    ul {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 80px;
        user-select: none;
        flex-wrap: wrap;
        li {
            width: 19%;
            height: 380px;
            margin-bottom: 1%;
            overflow: hidden;
            cursor: pointer;
            &:hover {
                .text-wrap {
                    p {
                        color: var(--blue-main);
                    }
                }
            }
            .review {
                display: flex;
                align-items: center;
            }
            .img-wrap {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            &:not(:last-of-type) {
                margin-right: 1%;
            }
            .text-wrap {
                p {
                    font-size: 1.4rem;
                    color: #999;
                }
            }
            .price-wrap {
                span {
                    margin-right: 10px;
                    font-weight: 700;
                    &:first-of-type {
                        text-decoration: line-through;
                        color: #dcdcdc;
                    }
                    &:last-of-type {
                        color: #cb1400;
                    }
                }
            }
        }
    }
`;

export const ProductPagingWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        padding: 3px 10px;
        margin: 0px 5px;
        color: var(--blue-main);
        font-weight: 500;
        font-size: 1.2rem;
        &.active {
            border: 1px solid #000;
        }
        &:last-of-type,
        &:first-of-type {
            font-size: 2rem;
            font-weight: 700;
        }
    }
`;
