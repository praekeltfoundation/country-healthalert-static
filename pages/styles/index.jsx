import styled from 'styled-components'

const NavbarBase = styled.nav`
  background: #e6513d;
  color: white;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding-left: 15px;
  }
  line-height: 1;
  height: 40px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;
`

export const Navbar = styled(NavbarBase)`
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`
