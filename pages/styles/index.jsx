import styled from 'styled-components'

const NavbarBase = styled.nav`
  position: relative;
`

/*
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);
  
*/

export const Navbar = styled(NavbarBase)`

  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`
