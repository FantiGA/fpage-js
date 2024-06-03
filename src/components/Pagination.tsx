/**
 * 分页组件 Pagination
 *
 * @param {number} current 当前页
 * @param {number} total 结果总数
 * @param {number} pageSetup 每页显示数
 * @param {string} mode 输出格式(可重复)。<表示“上一页”，>表示下一页，*表示页码区，=表示跳转区。
 * @param {PageChangeEvent<number>} onPageChange 页码变化的回调函数
 */

import { FC, ReactNode, useEffect, useState } from "react";
import type { PaginationProps } from "@types";
import { DotsHorizontalIcon, LeftIcon, RightIcon } from "@components/buttons";

const Pagination: FC<PaginationProps> = ({
  current,
  total,
  pageSetup,
  mode,
  onPageChange,
}) => {
  const totalPage = Math.ceil(total / pageSetup);
  const [inputValue, setInputValue] = useState(current);

  useEffect(() => {
    setInputValue(current);
  }, [current]);

  const handlePageChange = (newValue: number) => {
    if (newValue < 1) {
      onPageChange(1);
    } else if (newValue > totalPage) {
      onPageChange(totalPage);
    } else {
      onPageChange(newValue);
    }
  };

  const createButton = (
    text: ReactNode,
    page: number,
    disabled: boolean
  ): JSX.Element => (
    <button
      className={`px-4 py-2 mx-1 border rounded-lg ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
      disabled={disabled}
      onClick={() => handlePageChange(page)}
    >
      {text}
    </button>
  );

  const createLink = (page: number, currentPage: number): JSX.Element => (
    <a
      href={`#`}
      className={`px-4 py-2 mx-1 ${
        page === currentPage ? "font-bold text-blue-500" : "text-gray-500"
      }`}
      onClick={(e) => {
        e.preventDefault();
        handlePageChange(page);
      }}
    >
      {page}
    </a>
  );

  const createPageNumbers = (): JSX.Element[] => {
    if (totalPage <= 10) {
      return Array.from({ length: totalPage }, (_, i) =>
        createLink(i + 1, current)
      );
    } else if (current < 10) {
      return [
        ...Array.from({ length: 10 }, (_, i) => createLink(i + 1, current)),
        <DotsHorizontalIcon
          key="dots1"
          className="mx-1 my-auto w-4 h-3 fill-gray-500"
        />,
        createLink(totalPage, current),
      ];
    } else if (totalPage - current < 10) {
      return [
        createLink(1, current),
        <DotsHorizontalIcon
          key="dots2"
          className="mx-1 my-auto w-4 h-3 fill-gray-500"
        />,
        ...Array.from({ length: 10 }, (_, i) =>
          createLink(totalPage - 10 + i + 1, current)
        ),
      ];
    } else {
      return [
        createLink(1, current),
        createLink(2, current),
        <DotsHorizontalIcon
          key="dots3"
          className="mx-1 my-auto w-4 h-3 fill-gray-500"
        />,
        ...Array.from({ length: 7 }, (_, i) =>
          createLink(current - 3 + i, current)
        ),
        <DotsHorizontalIcon
          key="dots4"
          className="mx-1 my-auto w-4 h-3 fill-gray-500"
        />,
        createLink(totalPage - 1, current),
        createLink(totalPage, current),
      ];
    }
  };

  const createForm = (): JSX.Element => (
    <span className="flex items-center space-x-2">
      <span>To</span>
      <input
        type="text"
        className="w-auto px-2 py-1 border rounded-lg text-center"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handlePageChange(inputValue);
          }
        }}
      />
      <span>Page</span>
      <button
        className="px-4 py-2 border rounded-lg bg-green-500 text-white"
        onClick={() => handlePageChange(inputValue)}
      >
        Go
      </button>
    </span>
  );

  const navElements = mode.split("").map((e, index) => {
    switch (e) {
      case "<":
        return createButton(<LeftIcon />, current - 1, current === 1);
      case ">":
        return createButton(<RightIcon />, current + 1, current === totalPage);
      case "*":
        return (
          <span key={index} className="flex space-x-1">
            {createPageNumbers()}
          </span>
        );
      case "=":
        return createForm();
      default:
        return null;
    }
  });

  return <div className="m-1 flex items-center space-x-2">{navElements}</div>;
};

export default Pagination;
