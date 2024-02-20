import Link from 'next/link';
// import { style } from '@vanilla-extract/css';
import { styled, Grid } from '@mui/material'

const Nav = styled(Grid)`
  height: 50px;
  background-color: #ffdd9e;
  margin: 0 0 30px 0;
  padding: 0 20px 0 20px;  
  display: flex;
  align-items: center; 
`
const LeftMenu = styled(Grid)`
  margin-right: auto;
  padding: 0 50px 0 0;
`

const RightMenu = styled(Grid)`
  margin-left: auto;
`

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  margin: 0 15px;
  transition: color 0.3s ease;
  &:hover {
    color: #ff6347; /* Hover 시에 색상 변경 */
  }
`;


export default function Navbar() {
  return (
    <Nav container>
      <LeftMenu item xs={3}>
        <MenuLink href="/">홈</MenuLink>
        <MenuLink href="/test">시험 보기</MenuLink>
      </LeftMenu>
      <RightMenu item>
        <MenuLink href="/join">회원가입</MenuLink>
      </RightMenu>
    </Nav>
  );
}