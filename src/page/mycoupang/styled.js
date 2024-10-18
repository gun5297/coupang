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
    }
    ul {
        &.btn-wrap {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 80px;
            cursor: pointer;
            li {
                width: 40%;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                padding: 20px;
                font-size: 2rem;
                color: #fafafa;
                &:first-of-type {
                    margin-right: 1%;
                    background-color: var(--blue-main);
                }
                &:last-of-type {
                    background-color: var(--red-main);
                }
            }
        }
    }
`;
