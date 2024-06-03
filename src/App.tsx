import { FC, useState } from "react";
import Pagination from "./components/Pagination";

const App: FC = () => {
  const [currentPage1, setCurrentPage1] = useState(456);
  const totalItems1 = 100000;
  const itemsPerPage1 = 50;

  const [currentPage2, setCurrentPage2] = useState(12);
  const totalItems2 = 10000;
  const itemsPerPage2 = 50;

  const [currentPage3, setCurrentPage3] = useState(1);
  const totalItems3 = 10000;
  const itemsPerPage3 = 10;

  return (
    <div className="overflow-hidden text-center m-5 text-sm">
      <Pagination
        current={currentPage1}
        total={totalItems1}
        pageSetup={itemsPerPage1}
        mode="<*>="
        onPageChange={setCurrentPage1}
      />
      <Pagination
        current={currentPage2}
        total={totalItems2}
        pageSetup={itemsPerPage2}
        mode="<*>"
        onPageChange={setCurrentPage2}
      />
      <Pagination
        current={currentPage3}
        total={totalItems3}
        pageSetup={itemsPerPage3}
        mode="<*>"
        onPageChange={setCurrentPage3}
      />
      <Pagination
        current={currentPage1}
        total={totalItems1}
        pageSetup={itemsPerPage1}
        mode="<*>"
        onPageChange={setCurrentPage1}
      />
    </div>
  );
};

export default App;
