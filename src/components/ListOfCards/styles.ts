import styled from 'styled-components'

export const ListItem = styled.div`
  transition: .4s all;
  img {
    &:hover {
      box-shadow: 0 0 9.5px 3px rgba(0,0,0,.2)
    }
  }
`

export const InputWrapper = styled.div`
  display: none;

  @media (min-width: 978px){
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    cursor: pointer;
  }

`
export const Input = styled.input`
  cursor: pointer;
`

export const SkeletonCard = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(101, 101,101, 0) 0,
      rgba(101, 101,101, 0.2) 20%,
      rgba(101, 101,101,  0.3) 60%,
      rgba(101, 101,101, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`