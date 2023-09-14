import usePaginationData from "../../hooks/usePaginationData";
import { ChevronLeft, ChevronRight } from "../../assets/feather_icons";
import { Page, Wrapper } from "./styles";

const Pagination = () => {
  const { pagesArray, currentPage, selectPage, backAPage, forwardAPage } =
    usePaginationData();

  return (
    <Wrapper>
      <Page
        onClick={() => {
          backAPage();
        }}
      >
        <img src={ChevronLeft} alt="Go back a page" />
      </Page>
      {pagesArray?.map((page) => (
        <Page
          key={page + "-page"}
          className={`${page == currentPage && `selected`}`}
          onClick={() => {
            selectPage(page);
          }}
        >
          {page}
        </Page>
      ))}
      <Page
        onClick={() => {
          forwardAPage();
        }}
      >
        <img src={ChevronRight} alt="Go forward a page" />
      </Page>
    </Wrapper>
  );
};

export default Pagination;
