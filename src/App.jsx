import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { Title, Container, Wrapper} from "./Styled";

function App() {
 
    return (
        <>
        <GlobalStyle />
            <Wrapper>
               <Container>
                        <div>
                        <Title>
                                {" "} MY TO-DO LIST<span>react</span>{" "}
                        </Title>
                        </div>
                      <Router />
                </Container>
            </Wrapper>
        </>
    );
};

export default App;
