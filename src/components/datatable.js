import React from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { GlobalFilter } from './globalfilter';

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <div style={{ position: 'relative' }}>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ color: '#0d6efd', backgroundColor: 'darkgrey'}}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ border: '1px solid #ddd', padding: '8px', position: 'relative' }}>
                  {column.render('Header')}
                  <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <span style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
          <button
            style={{ marginRight: '5px', padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </button>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
          <button
            style={{ marginLeft: '5px', padding: '5px 10px', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </button>
        </span>
      </div>
    </div>
  );
};

export default DataTable;
