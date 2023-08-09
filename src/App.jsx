import { useState } from "react";
import ListArticles from "./components/ListArticles";
import styled from "styled-components";
import { bestFetch, newFetch } from "./hooks/useFetch";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  const { bestData, loading } = bestFetch();
  const { newData, newLoading } = newFetch();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Cont>
      <Navbar setSearchTerm={setSearchTerm} />
      {loading && newLoading && (
        <Loading>
          <div>
            <h3>loading...</h3>
          </div>
        </Loading>
      )}
      {!loading && !newLoading && (
        <Box>
          <ListArticles
            searchTerm={searchTerm}
            bestData={bestData}
            newData={newData}
          />
        </Box>
      )}
    </Cont>
  );
}

export default App;
const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  max-width: 1720px;
  width: 80%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: #cccccc 1px solid;
    border-radius: 5px;
  }
  h3 {
    color: #0179d2;
  }
`;
