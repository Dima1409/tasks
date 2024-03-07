import Counter from "components/Counter";
import FilterTasks from "components/FilterTasks";

const SharedLayout: React.FC = () => {
  return (
    <header>
      <h1>Tasks list</h1>
      <section>
        <h2>Tasks</h2>
        <Counter/>
      </section>
      <section>
        <h2>Filter</h2>
        <FilterTasks/>
      </section>
    </header>
  );
};

export default SharedLayout;
