import { useDispatch } from "react-redux";
// import { selectStatus } from "../../redux/selectors";
// import status from "redux/constants";
import { setStatus } from "../../redux/filterSlice";
import useFilterSelector from "hooks/useFilterSelectors";

const FilterStatus: React.FC = () => {
  const { filter } = useFilterSelector();
  const dispatch = useDispatch();
  const handleFilterChange = (newFilter: string): void => {
    dispatch(setStatus(newFilter));
  };
  return (
    <>
      <button
        onClick={(): void => handleFilterChange("all")}
        disabled={filter === "all"}
      >
        all
      </button>
      <button
        onClick={(): void => handleFilterChange("active")}
        disabled={filter === "active"}
      >
        active
      </button>
      <button
        onClick={(): void => handleFilterChange("completed")}
        disabled={filter === "completed"}
      >
        completed
      </button>
    </>
  );
};

export default FilterStatus;
