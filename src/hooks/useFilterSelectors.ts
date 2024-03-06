import { useSelector } from "react-redux";
import { selectStatus } from "../redux/selectors";
import { FiltersState } from "utils/types";

const useFilterSelector = (): FiltersState => {
  const filter = useSelector(selectStatus);
  return { filter };
};

export default useFilterSelector;
