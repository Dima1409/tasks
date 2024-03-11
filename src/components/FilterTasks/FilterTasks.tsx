import { useDispatch } from "react-redux";
import { setStatus } from "../../redux/filterSlice";
import useFilterSelector from "hooks/useFilterSelectors";
import { ButtonsWrapper, ButtonFilter } from "./FilterTasks.styled";

const FilterStatus: React.FC = () => {
  const { filter } = useFilterSelector();
  const dispatch = useDispatch();
  const handleFilterChange = (newFilter: string): void => {
    dispatch(setStatus(newFilter));
  };
  return (
    <ButtonsWrapper>
      <ButtonFilter
        onClick={(): void => handleFilterChange("all")}
        disabled={filter === "all"}
      >
        all
      </ButtonFilter>
      <ButtonFilter
        onClick={(): void => handleFilterChange("active")}
        disabled={filter === "active"}
      >
        active
      </ButtonFilter>
      <ButtonFilter
        onClick={(): void => handleFilterChange("completed")}
        disabled={filter === "completed"}
      >
        completed
      </ButtonFilter>
    </ButtonsWrapper>
  );
};

export default FilterStatus;
