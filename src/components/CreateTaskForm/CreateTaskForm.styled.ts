import styled from "styled-components";
import { theme } from "theme/theme";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  border-top-left-radius: ${theme.radii.small};
  border-bottom-left-radius: ${theme.radii.small};
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  background-color: ${theme.colors.lightColor};
  height: 100%;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  border: ${theme.borders.normal} ${theme.colors.accentColor};
  outline: none;
  color: ${theme.colors.mainColor};
  ${theme.mq.tablet} {
    width: 520px;
  }
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${theme.borders.normal} ${theme.colors.accentColor};
  border-left: none;
  border-bottom-right-radius: ${theme.radii.small};
  border-top-right-radius: ${theme.radii.small};
  height: 100%;
  background-color: ${theme.colors.accentColor};
  color: ${theme.colors.lightColor};
  transition: ${theme.transitions.durations.default};
  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.darkColor};
    &:hover {
      cursor: default;
    }
  }
`;

const ClearButton = styled(FormButton)`
  margin: 0;
  padding: 0;
  background-color: ${theme.colors.lightColor};
  border: ${theme.borders.normal} ${theme.colors.accentColor};
  border-left: none;
  border-radius: 0;
`;
export { Form, FormInput, FormButton, ClearButton };
