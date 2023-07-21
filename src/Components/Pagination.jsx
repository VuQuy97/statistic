import Pagination from 'react-bootstrap/Pagination';

export default function PaginationComponent({ page, handleChangePage = () => {} }) {
  return (
    <Pagination>
      {Array.from({ length: 10 }).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === page}
            onClick={() => handleChangePage(pageNumber)} // 
          >
            {index + 1}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
}
