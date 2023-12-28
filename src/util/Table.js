const Table = (props) => {
  const { tableData } = props;
  const columns = Object.keys(tableData[0]);

  return (
    <table className="table-container">
      <thead>
        <tr>
          {columns.map((column) => (
            <th className="table-header" key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={row[column]}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
