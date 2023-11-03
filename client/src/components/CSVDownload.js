import React from 'react';
import PropTypes from 'prop-types';

const CSVDownloader = ({ data, filename }) => {
  // Convert array of objects to CSV string
  const convertToCSV = (data) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  // Trigger the download of CSV
  const downloadCSV = () => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button className="btn btn-primary" onClick={downloadCSV}>
      Download CSV
    </button>
  );
};

CSVDownloader.propTypes = {
  data: PropTypes.array.isRequired,
  filename: PropTypes.string.isRequired
};

export default CSVDownloader;
