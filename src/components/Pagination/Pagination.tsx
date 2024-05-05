import { Button } from '@mui/material';
import { useState } from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const [pagesToShow] = useState(3); // Số lượng trang hiển thị

  const handleClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    let startPage, endPage;

    // Logic để tính toán trang bắt đầu và trang kết thúc dựa trên trang hiện tại và tổng số trang
    if (currentPage <= Math.floor(pagesToShow / 2) + 1) {
      startPage = 1;
      endPage = Math.min(totalPages, pagesToShow);
    } else if (currentPage + Math.floor(pagesToShow / 2) >= totalPages) {
      startPage = totalPages - pagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(pagesToShow / 2);
      endPage = currentPage + Math.floor(pagesToShow / 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          key={i}
          className={`flex min-w-0 w-10 h-10 justify-center items-center rounded-[8px] bg-[#F9F5FF] ${i === currentPage ? 'text-white bg-[#90caf9]' : ''}`}
          onClick={() => handleClick(i)}
        >
          <span className="flex w-10 p-3 justify-center items-center flex-shrink-0 self-stretch">{i}</span>
        </Button>
      );
    }

    return pages;
  };

  return (
    <>
      <Button
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
        }}
        disabled={currentPage <= 1}
        onClick={currentPage > 1 ? () => handleClick(currentPage - 1) : () => { }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path d="M15.8334 10.4998H4.16669M4.16669 10.4998L10 16.3332M4.16669 10.4998L10 4.6665" stroke={`${currentPage <= 1 ? "#4e4e4e40" : "#b0b0b0"}`} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={`${currentPage <= 1 ? "text-[#4e4e4e69]" : "text-[#b0b0b0]"}`}>Previous</span>
      </Button>
      <div className="flex gap-1">
        {renderPages()}
      </div>
      <Button
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0"
        }}
        disabled={currentPage >= totalPages}
        onClick={currentPage < totalPages ? () => handleClick(currentPage + 1) : () => { }}
      >
        <span className={`${currentPage >= totalPages ? "text-[#4e4e4e69]" : "text-[#b0b0b0]"}`}>Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path d="M4.16666 10.4998H15.8333M15.8333 10.4998L9.99999 4.6665M15.8333 10.4998L9.99999 16.3332" stroke={`${currentPage >= totalPages ? "#4e4e4e40" : "#b0b0b0"}`} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </>
  );
};

export default Pagination;