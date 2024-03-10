export const calculatePagination = (currentPage: number, limit = 10) => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    return { startIndex, endIndex };
};

export const generatePageNumbers = (totalCount = 100, limit = 10) => {
    const totalPages = Math.ceil(totalCount / limit);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
};

