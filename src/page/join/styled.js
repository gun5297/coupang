import styled from 'styled-components';

export const AuthJoinWrap = styled.div`
    position: relative;
    #header {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 40px;
        margin-bottom: 15px;
        h1 {
            img {
                width: 200px;
            }
        }
    }
    .inp-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        label {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 51px;
            background: #fafafa;
            border-right: 1px solid #dcdcdc;
            i {
                font-size: 24px;
                color: #dcdcdc;
            }
        }
        input {
            width: 42rem;
            height: 51px;
            border: none;
            box-sizing: border-box;
            padding: 10px;
        }
        div {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            border: 1px solid #dcdcdc;
            position: relative;
            span {
                position: absolute;
                left: 0;
                bottom: -25px;
                font-size: 1.2rem;
                color: var(--red-main);
            }
        }
    }
    .btn-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button {
            width: 46rem;
            height: 45px;
            border: none;
            cursor: pointer;
            font-weight: 700;
            font-size: 1.6rem;
            background-color: var(--blue-main);
            color: #fff;
        }
    }
`;
