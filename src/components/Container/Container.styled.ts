import styled from "styled-components";
import { theme } from "theme/theme";

const MainContainer = styled.div`
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 10px;

  ${theme.mq.mobileOnly} {
    max-width: 320px;
  }

  ${theme.mq.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${theme.mq.desktop} {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export { MainContainer };
