import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPaginator } from "../store/capsules-slice";
import { sliceData } from "../utils/sliceData";

export default function Pagination({ paginateData, itemsPerPage }) {
  const pagesNum = Math.floor(paginateData.length / itemsPerPage);
  const [curPage, setCurPage] = useState(0);

  const dispatch = useDispatch();
  const goUpHandler = () => {
    if (curPage === pagesNum) return;
    setCurPage((prev) => prev + 1);
  };
  const goDownHandler = () => {
    if (curPage === 0) return;
    setCurPage((prev) => prev - 1);
  };

  useEffect(() => {
    const data = sliceData(paginateData, curPage, itemsPerPage);
    dispatch(getPaginator(data));
  }, [paginateData, curPage, itemsPerPage, dispatch]);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          {pagesNum + 1 > 1 ? (
            <li>
              <button onClick={goDownHandler} className="paginate">
                Previous
              </button>
            </li>
          ) : null}
          {[...Array(pagesNum + 1)].map((nav, index) => (
            <button
              key={index}
              onClick={() => setCurPage(index)}
              className={`paginate ${
                curPage === index && "text-white bg-slate-950"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {pagesNum + 1 > 1 ? (
            <li>
              <button onClick={goUpHandler} className="paginate">
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
