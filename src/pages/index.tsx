import type { NextPage } from "next";
import { Button } from "@rbeiro-ui/react";
import { HeaderContainer } from "../components/Header/styles";

const Home: NextPage = () => {
  return (
    <HeaderContainer>
      <Button>Olá</Button>
    </HeaderContainer>
  );
};

export default Home;
