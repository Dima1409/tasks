import styled from "styled-components";
import { theme } from "theme/theme";

const TodoItem = styled.li`
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  background-color: ${theme.colors.backgroundColor};
  border-radius: ${theme.radii.normal};
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  word-wrap: break-word;
  ${theme.mq.tablet} {
    width: 680px;
  }
`;

const TodoInput = styled.input`
  border-radius: ${theme.radii.small};
  width: 20px;
  height: 20px;
  transition: ${theme.transitions.durations.default};
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const TodoText = styled.p`
  max-width: 150px;
  padding: 2px 20px;
  margin-right: auto;
  color: ${theme.colors.mainColor};
  font-family: ${theme.fonts.hindSiliguri};
  transition: ${theme.transitions.durations.default};
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const ButtonDelete = styled.button`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: ${theme.transitions.durations.default};
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export { TodoItem, TodoInput, TodoText, ButtonDelete };
