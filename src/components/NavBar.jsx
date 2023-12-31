import styled from "styled-components";
import LogoImg from "../assets/hackerCloneLogo.png";

export default function Navbar(props) {
  const setSearchTerm = props.setSearchTerm;
  return (
    <NavBar className="navbar">
      <Container>
        <Heading>
          <Logo src={LogoImg} />
          <h2 className="navbar-header">Hacker Clone</h2>
        </Heading>

        <SearchBar
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Container>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background-color: white;
  color: #222222;
  height: 50px;
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  h2 {
    @media screen and (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1720px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0 10px;
  }
`;

const Logo = styled.img`
  height: 30px;
`;

const SearchBar = styled.input`
  height: 30px;
  width: 300px;
  background-color: white;
  border: 1px solid #cccccc;
  padding: 5px 20px;
  border-radius: 999px;
  color: #222222;
  ::placeholder {
    color: #222222;
  }
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
