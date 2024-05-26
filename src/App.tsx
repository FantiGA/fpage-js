import { FC, useState } from "react";
import Pagination from "./components/Pagination";

const App: FC = () => {
  const [currentPage1, setCurrentPage1] = useState(456);
  const totalItems1 = 100000; // 假设有10000个项目
  const itemsPerPage1 = 50; // 每页10个项目

  const [currentPage2, setCurrentPage2] = useState(12);
  const totalItems2 = 10000; // 假设有10000个项目
  const itemsPerPage2 = 50; // 每页10个项目

  const [currentPage3, setCurrentPage3] = useState(1);
  const totalItems3 = 10000; // 假设有10000个项目
  const itemsPerPage3 = 10; // 每页10个项目

  return (
    <div className="overflow-hidden text-center m-5 text-sm">
      <Pagination
        current={currentPage1}
        total={totalItems1}
        per={itemsPerPage1}
        type="js"
        ext="?page="
        mode="<*>="
        onPageChange={(page) => setCurrentPage1(page)}
      />
      <Pagination
        current={currentPage2}
        total={totalItems2}
        per={itemsPerPage2}
        type="js"
        ext="?page="
        mode="<*>"
        onPageChange={(page) => setCurrentPage2(page)}
      />
      <Pagination
        current={currentPage3}
        total={totalItems3}
        per={itemsPerPage3}
        type="js"
        ext="?page="
        mode="<*>"
        onPageChange={(page) => setCurrentPage3(page)}
      />
      <Pagination
        current={currentPage1}
        total={totalItems1}
        per={itemsPerPage1}
        type="js"
        ext="?page="
        mode="<*>"
        onPageChange={(page) => setCurrentPage1(page)}
      />
    </div>
  );
};

export default App;
