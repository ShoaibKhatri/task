import React, { useState } from "react";
import DonutChart from "react-donut-chart";
import { data } from "../../data/data";
import Table from "../../components/Table/Table";
// import "./dasboard.scss";

const DashBoard = () => {
  const [toggleTable, setToggleTable] = useState(true);

  return (
    <>
      <div className="md:flex w-full mx-auto mt-5">
        <Table />
        {toggleTable ? (
          <div className="w-full border md:ml-2">
            <DonutChart
              className="dchart p-5  mx-auto w-[360px]"
              width={500}
              height={300}
              innerRadius={0.8}
              selectedOffset={0}
              outerRadius={0.5}
              colors={["#000000", "#FF8C00", "#0000FF"]}
              data={data}
            />
          </div>
        ) : (
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
                    Group
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
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">348</td>
                  <td className="px-6 py-4">USD 12,528</td>
                  <td className="px-6 py-4">42</td>
                  <td className="px-6 py-4">USD 62,118</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">Female</td>
                  <td className="px-6 py-4">692</td>
                  <td className="px-6 py-4">USD 27,331</td>
                  <td className="px-6 py-4">35</td>
                  <td className="px-6 py-4">USD 5,175</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">Unknown</td>
                  <td className="px-6 py-4">105</td>
                  <td className="px-6 py-4">USD 3,494</td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">USD 4,489</td>
                </tr>
                <tr className=" border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4">1,145</td>
                  <td className="px-6 py-4">USD 41,389</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">USD 71,782</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-3">
        <button
          className={
            toggleTable
              ? "bg-blue-500 rounded-l-md pt-1 px-3"
              : "bg-gray-300 rounded-l-md pt-1 px-3"
          }
          onClick={() => {
            setToggleTable(true);
          }}
        >
          <span className="material-symbols-outlined">data_usage</span>
        </button>
        <button
          className={
            !toggleTable
              ? "bg-blue-500 rounded-r-md pt-1 px-3"
              : "bg-gray-300 rounded-r-md pt-1 px-3"
          }
          onClick={() => {
            setToggleTable(false);
          }}
        >
          <span className="material-symbols-outlined">today</span>
        </button>
      </div>
    </>
  );
};

export default DashBoard;
