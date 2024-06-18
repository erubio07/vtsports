import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
    itemsPerPage,
    currentPage,
    setCurrentPage,
    totalProducts
}) => {

    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        };
    };

    const handleNextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        };
    };


    return(
        <div className={styles.paginationContainer}>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.button}>
                Prev
            </button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles.button}>
                Next
            </button>
        </div>
    );
};

export default Pagination;