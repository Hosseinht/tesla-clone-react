import React from 'react';
import styled from "styled-components";


const Header = () => {
    return (
        <Container>
            <a>
                <img src="images/logo.svg" alt=""/>
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
            </RightMenu>
            <CustomMenu>
                <a href="#">Menu</a>
            </CustomMenu>
        </Container>
    );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0; //these three are for width 100%
  
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1; //full width
  justify-content: center;
  
  a{
    font-weight: 600;
  
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px){
  display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
   a{
    font-weight: 600;
    margin-right:10px;
  }
  @media(max-width: 768px){
  display: none;
  }
`
const CustomMenu = styled.div`
  a{
    font-weight: 600;
    margin-right:10px;
  }
`