import React from "react";
import ChartApp from "./ChartApp";
import { FaBeer, FaChevronDown } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import "./styles/chart.css";
const Chart = () => {
  return (
    <>
      {/* sales detail div */}

      <div className="salesDiv">
        <h2 id="h2">Sales detail</h2>
      </div>

      {/* total sales overvies div */}

      <div className="totalSalesDiv">
        <div>
          <h2 id="h2">Total Sales Overview</h2>
          <p className="aug7">7 - 13 Aug, 2020</p>
        </div>
        <div>
          <p className="refresh">
            {" "}
            <FiRefreshCw /> Refresh Metrics
          </p>
          <p id="filter">
            Filter by| <b>This week</b>
            <FaChevronDown />
          </p>
        </div>
      </div>

      {/* chart div */}

      <div className="chartDiv">
        <div className="chartSection">
          {/* upper div */}
          <div className="upperDiv">
            <div>
              <p>$74,729.00</p>
              <p>
                <AiOutlineStock /> +21% from last week{" "}
              </p>
            </div>
            <div>
              <p>
                <AiOutlineStock className="stockImg" /> Highest revenue
                since 2 weeks ago
              </p>
            </div>
          </div>

          {/* lower chart div */}

          <div>
            <ChartApp />
          </div>
        </div>

        {/* side bar div */}
        <div className="sideUpperDiv">
          {/* upper div */}
          <div>
            <p>Total Profit</p>
            <p>$12,545.00</p>
            <p>
              <AiOutlineStock /> +23% from last week{" "}
            </p>
          </div>

          {/* lower div */}
          <div>
            <p>Total Products Sold</p>
            <p>329</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
