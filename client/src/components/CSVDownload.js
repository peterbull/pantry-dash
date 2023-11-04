import React from 'react';
import PropTypes from 'prop-types';


/**
 * A component that allows downloading CSV files from an array of objects.
 * @param {Object} props - The props object.
 * @param {Array} props.data - The array of objects to be converted to CSV.
 * @param {string} props.filename - The name of the downloaded file.
 * @returns {JSX.Element} - A button that triggers the download of the CSV file.
 */
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
