import styled from "styled-components";

export const Container = styled.main`
  background-color: black;
  color: greenyellow;
  max-width: 100%;
  height: 100vh;
  margin: 0;
  padding: 2.5rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  box-shadow: 1px 7px 20px grey;
  margin-block-end: 13px;
`;

export const Menu = styled.div`
  width: 100px;
  border-inline-end: 1px gray solid;
  height: 100%;
`;

export const Project = styled.button`
  width: 100%;
  height: 30px;
  border: 1px orange solid;
  border-radius: 5px;
  cursor: pointer;
`;
