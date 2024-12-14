import React, { useState, useEffect } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import '../../assets/styles/Head/HeadChart.css';

function HeadChart() {
  const [department, setDepartment] = useState('Computer Science');
  const [departmentData, setDepartmentData] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [ratingsData, setRatingsData] = useState([]);
  const [filters, setFilters] = useState({
    batch: '',
    section: '',
  });

  // Static data
  const staticDepartmentData = [
    { label: 'Jan', value: 75 },
    { label: 'Feb', value: 82 },
    { label: 'Mar', value: 90 },
    { label: 'Apr', value: 88 },
  ];

  const staticStudentsData = [
    { label: '', value: 85 },
    { label: '', value: 92 },
    { label: '', value: 78 },
    { label: '', value: 88 },
  ];

  const staticBatchData = [
    { label: '2026', value: 80 },
    { label: '2027', value: 75 },
    { label: '2028', value: 85 },
  ];

  const staticRatingsData = [
    { label: '5 Stars', value: 120 },
    { label: '4 Stars', value: 90 },
    { label: '3 Stars', value: 60 },
    { label: '2 Stars', value: 30 },
  ];

  // Replace axios call with static data
  const fetchData = () => {
    setDepartmentData(staticDepartmentData);
    setStudentsData(staticStudentsData);
    setBatchData(staticBatchData);
    setRatingsData(staticRatingsData);
  };

  useEffect(() => {
    fetchData();
  }, [department, filters]);

  // Update filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="head-chart">
      <div className="charts-container">
        <div className="chart">
          <h3>Whole Department Performance</h3>
          <Line
            data={{
              labels: departmentData.map(item => item.label),
              datasets: [
                {
                  label: 'Performance',
                  data: departmentData.map(item => item.value),
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
              ],
            }}
          />
        </div>

        <div className="chart">
          <div className="filters">
            <h3>Filter Students Performance</h3>
            <select name="batch" onChange={handleFilterChange} value={filters.batch}>
              <option value="">All Batches</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
            <select name="section" onChange={handleFilterChange} value={filters.section}>
              <option value="">All Sections</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          <h3>Students' Performance</h3>
          <Pie
            data={{
              labels: studentsData.map(item => item.label),
              datasets: [
                {
                  label: 'Performance',
                  data: studentsData.map(item => item.value),
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                },
              ],
            }}
          />
        </div>

        <div className="chart">
          <h3>Batch-wise Performance</h3>
          <Bar
            data={{
              labels: batchData.map(item => item.label),
              datasets: [
                {
                  label: 'Performance',
                  data: batchData.map(item => item.value),
                  backgroundColor: 'rgba(153, 102, 255, 0.2)',
                  borderColor: 'rgba(153, 102, 255, 1)',
                },
              ],
            }}
          />
        </div>

        <div className="chart">
          <h3>Department Ratings Out of 5</h3>
          <Pie
            data={{
              labels: ratingsData.map(item => item.label),
              datasets: [
                {
                  label: 'Ratings',
                  data: ratingsData.map(item => item.value),
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                  ],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeadChart;
