import React from 'react';

interface DataTableProps<T> {
  title: string;
  columns: { key: keyof T; header: string }[];
  data: T[];
  renderRow?: (item: T) => React.ReactNode;
}

const DataTable = <T extends { id: string | number }>({ title, columns, data, renderRow }: DataTableProps<T>) => {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 shadow-lg mt-8">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-700/50">
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} scope="col" className="px-6 py-3">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-gray-800/30 border-b border-gray-700/50 hover:bg-gray-700/40">
                {renderRow ? renderRow(item) : columns.map(col => (
                  <td key={String(col.key)} className="px-6 py-4">{(item as any)[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
