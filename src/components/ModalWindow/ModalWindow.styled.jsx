import styled from '@emotion/styled'

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffc0cb40;
`

export const Modal = styled.div`
    width: 400px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: wheat;
    transform: translate(-50%, -50%)
`