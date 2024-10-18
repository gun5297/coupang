import styled from 'styled-components';

export const MyAuthWrap = styled.div`
    h2 {
        font-weight: 700;
        font-size: 3rem;
        margin-bottom: 15px;
    }
    form {
        > div {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;
            background-color: #eef1f8;
            &:first-child {
                border-top: 2px solid #999;
            }

            span {
                width: 20%;
                display: block;
                box-sizing: border-box;
                padding: 15px;
                font-size: 1.2rem;
            }
            .edit {
                background-color: #fff;
                width: 80%;
                min-height: 52px;
                padding-top: 10px;
                box-sizing: border-box;
                p {
                    box-sizing: border-box;
                    padding: 0px 30px;
                    display: inline-block;
                }
                .edit-wrap {
                    width: 80%;
                    background: #ddd;
                    box-sizing: border-box;
                    padding: 10px;
                    border-radius: 10px;
                    margin: 10px 0px 10px 30px;
                    label {
                        color: var(--blue-main);
                        font-weight: 200;
                    }
                    input {
                        outline: none;
                        width: 300px;
                        margin-right: 10px;
                    }
                }
            }
            .button,
            button {
                box-sizing: border-box;
                padding: 3px 20px;
                background: #fff;
                border: 1px solid #dcdcdc;
                cursor: pointer;
                font-size: 1.2rem;
                &:hover {
                    background-color: #fafafa;
                }
            }
            label {
                color: #999;
                font-size: 1.4rem;
                margin-right: 10px;
            }
            input {
                border: 1px solid #dcdcdc;
                box-sizing: border-box;
                padding: 3px 10px;
            }
        }
    }
    .btn-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        button {
            padding: 10px 20px;
            cursor: pointer;
            border: none;
            background: var(--blue-main);
            color: #fafafa;
            transition: all 0.3s;
            &:hover {
                background-color: #0f5ca8;
            }
        }
    }
`;

export const PurchaseListWrap = styled.ul`
    width: 100%;
    box-sizing: border-box;
`;
export const PurchaseitemWrap = styled.li`
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    margin-bottom: 20px;
    border-radius: 20px;
    display: flex;
    .img-wrap {
        width: 20%;
        margin-right: 10px;
        padding: 20px;
        box-sizing: border-box;
        img {
            width: 100%;
        }
    }
    .text-wrap {
        width: 60%;
        padding: 20px;
        box-sizing: border-box;
        p {
            margin-bottom: 20px;
        }
    }
    .btn-wrap {
        width: 20%;
        display: flex;
        flex-direction: column;
        border-left: 1px solid #dcdcdc;
        box-sizing: border-box;
        padding: 20px;
        button {
            margin-bottom: 5px;
            box-sizing: border-box;
            padding: 10px 20px;
            border: 1px solid #dcdcdc;
            background-color: #fff;
            cursor: pointer;
            &:nth-child(2) {
                border: 1px solid var(--blue-main);
                color: var(--blue-main);
                &:hover {
                    background-color: var(--blue-main);
                    color: #fff;
                }
            }
        }
    }
`;
