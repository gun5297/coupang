import styled from 'styled-components';

export const MyCoupangWrap = styled.div`
    position: relative;
    background-color: #fafafa;
    padding: 20px;
    box-sizing: border-box;
    .inner {
        background-color: #fff;
        min-height: 1000px;
        border: 1px solid #999;
        box-sizing: border-box;
        padding: 50px 30px;
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
    }
`;
