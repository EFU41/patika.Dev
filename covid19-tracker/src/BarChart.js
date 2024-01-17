import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Chart.js 3.x sürümünden itibaren 'auto' ekleyerek import etmek önemlidir.
import { useSelector } from "react-redux";

const BarChart = () => {
  const chartRef = useRef();
  const countryData = useSelector((state) => state.countryData);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { year: "Infected", count: countryData.cases },
        { year: "Recovered", count: countryData.recovered },
        { year: "Deaths", count: countryData.deaths },
        { year: "Activear", count: countryData.active },
      ];

      // Eğer mevcut grafik varsa yok et
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Yeni grafik çizimi
      const ctx = document.getElementById("acquisitions").getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    };

    fetchData();
  }, [countryData.cases]); // countryData.cases bağımlılığı eklendi

  return (
    <div style={{ width: "800px" }}>
      <canvas id="acquisitions"></canvas>
    </div>
  );
};

export default BarChart;
