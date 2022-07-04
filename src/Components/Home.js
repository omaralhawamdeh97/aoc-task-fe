import library from "../library.png";
import { HomeDiv } from "../styles";

const Home = () => {
  return (
    <HomeDiv>
      <h1>Books Monster</h1>
      <p>this will be the best destination for Book worms and monsters </p>
      <img src={library} alt="library" />
    </HomeDiv>
  );
};

export default Home;
