import { useContext } from "react";
import PaginationContext, {
  PaginationContextData,
} from "../../contexts/pagination";

const usePaginationData = (): PaginationContextData => {
  const context = useContext<PaginationContextData>(PaginationContext);

  return context;
};

export default usePaginationData;
