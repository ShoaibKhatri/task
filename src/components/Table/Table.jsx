import React from "react";

const Table = () => {
  return (
    <div className="relative overflow-x-auto w-full border md:mr-2">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ad Insights
            </th>
          </tr>
        </thead>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Campaigns
            </th>
            <th scope="col" className="px-6 py-3">
              Clicks
            </th>
            <th scope="col" className="px-6 py-3">
              Cost
            </th>
            <th scope="col" className="px-6 py-3">
              Conversions
            </th>
            <th scope="col" className="px-6 py-3">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Cosmetics</td>
            <td className="px-6 py-4">712</td>
            <td className="px-6 py-4">USD 4,272</td>
            <td className="px-6 py-4">8</td>
            <td className="px-6 py-4">USD 16,568</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Serum</td>
            <td className="px-6 py-4">3,961</td>
            <td className="px-6 py-4">USD 27,331</td>
            <td className="px-6 py-4">115</td>
            <td className="px-6 py-4">USD 362,526</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Facewash</td>
            <td className="px-6 py-4">9,462</td>
            <td className="px-6 py-4">USD 79,831</td>
            <td className="px-6 py-4">123</td>
            <td className="px-6 py-4">USD 266,800</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Shampoos</td>
            <td className="px-6 py-4">438</td>
            <td className="px-6 py-4">USD 2,151</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">USD 11,029</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Conditioners</td>
            <td className="px-6 py-4">1,680</td>
            <td className="px-6 py-4">USD 3,864</td>
            <td className="px-6 py-4">49</td>
            <td className="px-6 py-4">USD 175,245</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Facewash 2</td>
            <td className="px-6 py-4">4,978</td>
            <td className="px-6 py-4">USD 29,370</td>
            <td className="px-6 py-4">189</td>
            <td className="px-6 py-4">USD 623,106</td>
          </tr>
          <tr className=" border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Total</td>
            <td className="px-6 py-4">26,510</td>
            <td className="px-6 py-4">USD 1,43,819</td>
            <td className="px-6 py-4">489</td>
            <td className="px-6 py-4">USD 15,73,563</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
