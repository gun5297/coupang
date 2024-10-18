import styled from 'styled-components';

export const PaymentPCWrap = styled.div`
    width: 360px;
    background-color: #fafafa;
    padding: 10%;
    box-sizing: border-box;
    .title-wrap {
        margin-bottom: 20px;
        font-size: 16px;
        p {
            &:nth-child(2) {
                font-weight: 700;
            }
        }
    }
    .no-point {
        font-size: 11px;
        width: 100%;
        background-color: #fff;
        padding: 20px 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;
        p {
            color: #999;
        }
    }
    .card-wrap {
        width: 90%;
        border-radius: 10px;
        background-color: #fff;
        margin: 0 auto 50px;
        padding: 20px;
        box-sizing: border-box;
        .card {
            width: 100%;
            background-color: #ffff00;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
            p {
                &:nth-child(1) {
                    margin-bottom: 20%;
                }
                &:not(:first-of-type) {
                    opacity: 0.9;
                }
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        > span {
            display: block;
            width: 100%;
            text-align: center;
            padding: 3%;
            box-sizing: border-box;
            border-bottom: 1px solid #dcdcdc;
            font-size: 14px;
        }
        > p {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            color: #999;
            box-sizing: border-box;
            margin-top: 3%;
        }
    }
    .btn-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            background-color: #ffff00;
            border: none;
            width: 200px;
            height: 40px;
            color: #000;
            border-radius: 20px;
            &:hover {
                background-color: #ffff00;
            }
        }
    }
`;
