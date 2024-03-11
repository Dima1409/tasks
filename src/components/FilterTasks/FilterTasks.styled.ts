import styled from "styled-components";
import { theme } from "theme/theme";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  ${theme.mq.tablet} {
    margin: 0 auto 20px;
    max-width: 400px;
  }
`;

const ButtonFilter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${theme.borders.none};
  border-radius: ${theme.radii.small};
  background-color: ${theme.colors.accentColor};
  color: ${theme.colors.lightColor};
  font-family: ${theme.fonts.hindSiliguri};
  font-size: ${theme.fontSizes.small};
  width: 90px;
  min-height: 35px;
  transition: ${theme.transitions.durations.default};
  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:disabled {
    box-shadow: 0 0 8px ${theme.colors.mainColor};
  }
`;

export { ButtonsWrapper, ButtonFilter };
