import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Container = styled.div ``;

const Wrapper = styled.div `
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div `
  flex:1;
`;

const Image = styled.img `
  width: 100%
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div `
  flex:1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p `
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight; 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%
  margin: 30px 0px;
  display: flex;
  justify-content: space-between:
`;

const Filter = styled.div`
  display: flex;
  align-items: center;  
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;

`;

// const FilterSizeOption = styled.option``;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <ImgContainer>
          <Image/>
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.</Desc>
            <Price>$20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
              </Filter>
              <Filter>

                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  {/* <FilterSizOption>XS</FilterSizOption> 
                  <FilterSizOption>S</FilterSizOption> 
                  <FilterSizOption>M</FilterSizOption> 
                  <FilterSizOption>L</FilterSizOption> 
                  <FilterSizOption>XL</FilterSizOption> 
                  <FilterSizOption>XXL</FilterSizOption>  */}
                </FilterSize>
              </Filter> 
            </FilterContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  );
};

export default Product
