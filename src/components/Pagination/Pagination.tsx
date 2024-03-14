import React from 'react';
import styles from './Pagination.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPages = () => {
    const pages = [];
    const range = 5;

    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.button} onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        <LeftOutlined />
      </button>
      <ul>
        {renderPages().map(page => (
          <li key={page} onClick={() => handleClick(page)} className={currentPage === page ? styles.active : ''}>
            {page}
          </li>
        ))}
      </ul>
      <button
        className={styles.button}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default Pagination;
