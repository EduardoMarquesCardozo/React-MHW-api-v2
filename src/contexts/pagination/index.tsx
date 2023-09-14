import React, { createContext, useEffect, useState } from "react";
import { pageSize } from "../../utils/constants";
import useArmorSetData from "../../hooks/useArmorSetData";

interface PaginationProviderProps {
  children: React.ReactNode;
}

export interface PaginationContextData {
  currentPage: number;
  maxPage: number;
  pagesArray: number[];
  selectPage: (pageToGo: number) => void;
  backAPage: () => void;
  forwardAPage: () => void;
}

const PaginationContext = createContext({} as PaginationContextData);

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const { ListPaginated, allArmorSets } = useArmorSetData();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [pagesArray, setPagesArray] = useState<number[]>([1, 2, 3]);

  const forwardAPage = () => {
    if (currentPage == maxPage) return;
    setPagesArray([]);
    if (currentPage + 1 == maxPage) fillArrayFromLast();
    else setPagesArray([currentPage, currentPage + 1, currentPage + 2]);
    ListPaginated(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const backAPage = () => {
    if (currentPage == 1) return;
    setPagesArray([]);
    if (currentPage - 1 == 1) fillArrayFromOne();
    else setPagesArray([currentPage - 2, currentPage - 1, currentPage]);
    ListPaginated(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };

  const selectPage = (pageToGo: number) => {
    if (pageToGo == currentPage) return;
    setPagesArray([]);
    if (pageToGo == 1) fillArrayFromOne();
    else if (pageToGo == maxPage) fillArrayFromLast();
    else setPagesArray([pageToGo - 1, pageToGo, pageToGo + 1]);
    ListPaginated(pageToGo);
    setCurrentPage(pageToGo);
  };

  const fillArrayFromLast = () => {
    for (let i = maxPage - 2 >= 1 ? maxPage - 2 : 1; i <= maxPage; i++) {
      setPagesArray((pagesArray) => [...pagesArray, i]);
    }
  };

  const fillArrayFromOne = () => {
    for (let i = 1; i <= 3 && i < maxPage; i++) {
      setPagesArray((pagesArray) => [...pagesArray, i]);
    }
  };

  useEffect(() => {
    setPagesArray([]);
    setMaxPage(Math.ceil(allArmorSets.length / pageSize));
    fillArrayFromOne();
    setCurrentPage(1);
  }, [allArmorSets, maxPage]);

  return (
    <PaginationContext.Provider
      value={{
        selectPage,
        backAPage,
        forwardAPage,
        currentPage,
        maxPage,
        pagesArray,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;
