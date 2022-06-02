import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, FavoriteBorderOutlined, PersonOutline, NotificationImportantOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

//I created this instead of div because I am using style component 
const Container = styled.div`
    height: 60px; 
`;

//parent
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1 ;
    display: flex;
    align-items: center;
`;

//Creating components for left side 
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1 ;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`; 

const Right = styled.div`
    flex: 1 ;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    justify-content: space-between;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style ={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Dealerz.</Logo></Center>
                <Right>
                    <MenuItems>
                        <Badge color="primary">
                            <FavoriteBorderOutlined />
                        </Badge>
                        <Badge badgeContent={3} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                        <Badge color="primary">
                            <PersonOutline/>
                        </Badge>
                        <Badge color="primary">
                            <NotificationImportantOutlined/>
                        </Badge>
                    </MenuItems>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

