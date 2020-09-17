import styled from 'styled-components'

//NAV STYLES
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
export const Navbar = styled(NavbarBase)`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
`

//POSITION MEASUREMENT STYLES
export const ViewportPositionElement = styled.div`
  background: #000;
  left: 10px;
  padding: 15px;
  position: absolute;
  top: 0;
  opacity: 0;
  z-index: 9999999;
`

export const PositionElement = styled.div`
  background: #000;
  color: white;
  left: 10px;
  padding: 15px;
  position: absolute;
  opacity: 0;
  top: 190px;
  z-index: 999;
`
