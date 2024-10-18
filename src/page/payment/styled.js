import styled from 'styled-components';

export const PaymentWrap = styled.div`
    width: 100%;
    background-color: #fafafa;
    height: 100vh;
    padding: 10%;
    box-sizing: border-box;
    .title-wrap {
        margin-bottom: 5.5556vw;
        font-size: 4.4444vw;
        p {
            &:nth-child(2) {
                font-weight: 700;
            }
        }
    }
    .no-point {
        font-size: 3.0556vw;
        width: 100%;
        background-color: #fff;
        padding: 5.5556vw;
        box-sizing: border-box;
        margin-bottom: 5.5556vw;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;
        p {
            color: #999;
        }
    }
    .card-wrap {
        width: 90%;
        height: 65.5556vw;
        border-radius: 10px;
        background-color: #fff;
        margin: 0 auto 13.8889vw;
        padding: 5.5556vw;
        box-sizing: border-box;
        .card {
            width: 100%;
            background-color: #ffff00;
            border-radius: 10px;
            padding: 5% 10%;
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
            font-size: 3.8889vw;
        }
        > p {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 3.8889vw;
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
            width: 80%;
            line-height: 3;
            border-radius: 20px;
        }
    }
    .pop {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
        p {
            font-size: 2.8889vw;
            width: 100%;
            margin-bottom: 1vw;
        }
    }
`;
