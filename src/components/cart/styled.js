import styled from 'styled-components';

export const CartListWrap = styled.ul`
    width: 65%;
    margin: 80px 2% 80px 0px;
    .all-del-btn {
        padding: 5px 20px;
        cursor: pointer;
        background-color: var(--blue-main);
        color: #fafafa;
        font-size: 1.4rem;
        &:hover {
            background-color: #0f5ca8;
        }
    }
`;
export const CartItemWrap = styled.li`
    margin-bottom: 20px;
    position: relative;
    .con-box {
        display: flex;
        box-sizing: border-box;
        flex-wrap: wrap;
        padding: 20px;
    }
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #dcdcdc;
    .img-wrap {
        width: 30%;
        img {
            width: 100%;
        }
    }
    .text-wrap {
        width: 70%;
        box-sizing: border-box;
        padding: 0px 20px;
        .name {
            margin-bottom: 10px;
            padding-right: 30px;
            box-sizing: border-box;
        }
        .sale {
            em {
                margin-right: 10px;
                padding: 3px 10px;
                background-color: var(--red-main);
                color: #fff;
                font-size: 1rem;
            }
            span {
                text-decoration: line-through;
                color: #999;
                font-weight: 100;
                font-size: 1.2rem;
            }
        }
    }
    .price {
        margin-bottom: 30px;
        p {
            font-weight: 700;
            font-size: 2rem;
        }
    }
    .product-cnt {
        input {
            width: 100px;
            height: 40px;
            text-align: center;
            font-size: 2rem;
            border: 1px solid #ddd;
        }
    }
    .product-info {
        width: 100%;
        height: 50px;
        background-color: #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color: #999;
            font-size: 1.2rem;
            margin: 0px 5px;
            span {
                color: #000;
                font-size: 1.6rem;
                margin: 0px 5px;
            }
        }
    }
    .del-btn {
        position: absolute;
        right: 20px;
        top: 20px;
        background-color: #fafafa;
        padding: 3px 10px;
        user-select: none;
        font-size: 1.2rem;
        cursor: pointer;
    }
`;

export const CartTotalPriceWrap = styled.div`
    width: 33%;
    height: 100%;
    margin: 80px 0px 150px 0px;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    padding: 20px;
    position: relative;
    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 20px;
    }
    p {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1px;
        &.total-sale {
            span {
                color: var(--red-main);
            }
        }
        span {
            font-weight: 700;
        }
        &:nth-child(4) {
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }
        &.end {
            justify-content: end;
            align-items: center;
            margin: 10px 0px;
            font-size: 2rem;
            font-weight: 700;
            em {
                font-size: 1.6rem;
                margin-left: 3px;
                font-weight: 500;
            }
            span {
                font-size: 1.4rem;
                color: var(--red-main);
            }
        }
        &.wow-end {
            justify-content: space-between;
            color: var(--blue-main);
        }
    }
    .btn-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            width: 90%;
            height: 50px;
            background-color: var(--blue-main);
            border: none;
            color: #fafafa;
            font-weight: 700;
            font-size: 1.6rem;
            cursor: pointer;
            &:hover {
                background-color: #0f5ca8;
            }
        }
    }
    .wow-change {
        position: absolute;
        bottom: -100px;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
        background-color: var(--red-main);
        color: #fafafa;
        user-select: none;
        p {
            margin-right: 5px;
            &:first-child {
                width: 100%;
            }
            &:nth-child(2) {
                font-size: 2rem;
                font-weight: 700;
                margin-right: 20px;
            }
        }
    }
`;
