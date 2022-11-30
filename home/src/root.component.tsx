import { Home } from "./components/Home/index";
import { GlobalStyle } from "./styles/global";

export default function Root(props) {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
