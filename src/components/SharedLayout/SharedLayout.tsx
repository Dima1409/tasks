import Counter from "components/Counter";
import FilterTasks from "components/FilterTasks";
import {
  MainHeader,
  Header,
  HeaderMinor,
  Sections,
} from "./SharedLayout.styled";

const SharedLayout: React.FC = () => {
  return (
    <MainHeader>
      <Header>My tasks list</Header>
      <Sections>
        <Counter />
      </Sections>
      <Sections>
        <HeaderMinor>Filter</HeaderMinor>
        <FilterTasks />
      </Sections>
    </MainHeader>
  );
};

export default SharedLayout;
