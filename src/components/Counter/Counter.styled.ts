import styled from "styled-components";
import { theme } from "theme/theme";

const CounterDescription = styled.p`
  color: ${theme.colors.accentColor};
  font-family: ${theme.fonts.roboto};
  margin: 0;
  margin-left: 10px;
  text-align: right;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.bold};
  }
`;

export { CounterDescription };
