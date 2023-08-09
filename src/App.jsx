import { useState } from "react";
import ListArticles from "./components/ListArticles";
import styled from "styled-components";
import useFetch from "./hooks/useFetch";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  const { data, loading } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Cont>
      <Navbar setSearchTerm={setSearchTerm} />
      {loading && <div>Loading</div>}
      {!loading && (
        <Box>
          <ListArticles searchTerm={searchTerm} data={data} />
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
  width: 80%;
`;
