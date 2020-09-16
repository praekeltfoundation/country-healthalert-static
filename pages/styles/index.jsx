import styled from 'styled-components'

const NavbarBase = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  position: relative;
  line-height: 1;
  height: 100px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1em;
  width: 100%;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  @media (min-width: 375px) {
    flex-direction: row;
    padding: 1em 2em;
  }
`

/*
  transition: background .2s cubic-bezier(0, .55, .45, 1),top .6s cubic-bezier(0, .55, .45, 1);
*/

export const Navbar = styled(NavbarBase)`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`
export const PositionElement = styled.div`
  position: absolute;
  padding: 15px;
  top: 150px;
  left: 10px;
  z-index: 9999999;
`
