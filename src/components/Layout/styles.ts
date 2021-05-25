import styled from 'styled-components'

export const Layout = styled.main`
  min-height: 100vh;
  background-color: ${(props: any) => props.theme.colors.secondary};
`
export const Header = styled.div`
  background-color: ${(props: any) => props.theme.colors.primary};
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
  padding: 1rem 0;
  svg {
    fill: white;
    &:hover {
      fill: ${(props: any) => props.theme.colors.thirdary};
    }
  }
`
export const Footer = styled.div`
  background-color: ${(props: any) => props.theme.colors.secondary};
  svg {
    fill: white;
    &:hover {
      fill: ${(props: any) => props.theme.colors.thirdary};
    }
  }
`
export const Content = styled.div`
  min-height: 100vh;
`

export const Loading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Pulse = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid ${props => props.theme.colors.thirdary};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`