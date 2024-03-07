import { useSelector } from "react-redux";
import { selectStatus } from "../redux/selectors";
import { Filter } from "utils/types";

const useFilterSelector = (): Filter => {
  const filter = useSelector(selectStatus);
  return filter ;
};

export default useFilterSelector;
