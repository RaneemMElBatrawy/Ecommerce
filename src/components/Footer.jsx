import styled from "styled-components";
import { YouTube, Facebook, Twitter, Instagram } from "@material-ui/icons";

const Container = styled.div`
    display: flex;

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%
    color:white;
    //background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
   
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h6 `
    position: absolute;
    margin: 100px;
    display: flex;
    flex-wrap: wrap;
`;

const List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li `
    width: 50%;
    margin-bottom: 10px;
    
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Footer = () => {
    return <Container>
        <Left>
            <Logo>Dealerz.</Logo>
            <Desc>Privacy Policy</Desc>
            <SocialContainer>
                <SocialIcon color ="#F86338">
                    <YouTube/>
                </SocialIcon>
                <SocialIcon color ="#F86338">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color ="#F86338">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color ="#F86338">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>@2020 TanahAir Studio. All rights reserved.</Title>
        </Right>
        </Container>
    
};

export default Footer
