import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #F86338 ;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`;

const Announcement = () => {
  return (
    <Container>
      Super Deal Woho! Free Shipping on Orders Over $50 Only!
    </Container>
  )
}

export default Announcement
