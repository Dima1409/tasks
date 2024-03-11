import styled from "styled-components";
import { theme } from "theme/theme";

const MainHeader = styled.header`
  text-align: center;
  font-family: ${theme.fonts.hindSiliguri};
`;

const Header = styled.h1`
  font-size: ${theme.fontSizes.extraBold};
  color: ${theme.colors.mainColor};
  font-weight: ${theme.fontWeight.bold};
  margin: 0;
`;

const HeaderMinor = styled.h2`
  font-size: ${theme.fontSizes.bold};
  color: ${theme.colors.mainColor};
  margin: 0;
`;

const Sections = styled.section`
margin: 5px;
`

export { MainHeader, Header, HeaderMinor, Sections };
