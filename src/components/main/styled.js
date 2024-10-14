import styled from 'styled-components';

export const VisualWrap = styled.div`
    width: 100%;
    position: relative;
    .img-wrap {
        height: 45rem;
        overflow: hidden;
    }
    ul {
        position: absolute;
        right: 300px;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        li {
            height: 60px;
            overflow: hidden;
            box-sizing: border-box;
            cursor: pointer;
            &.active {
                border: 2px solid var(--blue-main);
            }
        }
    }
`;
