import { Button } from "@rbeiro-ui/react";
import { ContentContainer, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <div>Logo</div>
        <div>
          <Button>Entrar</Button>
        </div>
      </ContentContainer>
    </HeaderContainer>
  );
}
