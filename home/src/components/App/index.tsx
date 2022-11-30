import { Card } from "./styles";

export function App(props) {
  interface cardModel {
    name: string;
    path: string;
  }

  return (
    <>
      <h1>teste</h1>
      <Card>{props.name}</Card>;
    </>
  );
}
