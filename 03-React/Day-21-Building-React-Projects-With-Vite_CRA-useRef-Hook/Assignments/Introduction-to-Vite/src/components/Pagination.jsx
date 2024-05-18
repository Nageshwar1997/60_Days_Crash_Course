/* eslint-disable react/prop-types */
const Pagination = (props) => {
    const {page, setPage, totalPages} = props
  return (
    <div className="btnsDiv">
      {totalPages > 0 && (
        <>
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={pageNumber === page ? "active" : ""}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            onClick={() =>
              setPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={page === totalPages}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Pagination