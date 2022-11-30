import { App } from "../App";
import { Container, Content, Menu, Project } from "./styles";

export function Home() {
  interface cardModel {
    name: string;
    path: string;
  }

  const projects: cardModel[] = [
    {
      name: "dt.money",
      path: "/dt-money",
    },
    {
      name: "ig.news",
      path: "/ig.news",
    },
  ];
  return (
    <>
      <Container>
        <Content>
          Olá<br></br> seja bem vind ao meu MicroFrontend
        </Content>
        <Menu>
          teste
          {projects.forEach((element) => {
            <Project routerLink={element.path}>{element.name}</Project>;
          })}
          {/* {projects.forEach((element) => {
            <App projects={element} />;
          })} */}
        </Menu>
      </Container>
    </>
  );
}
