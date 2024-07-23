import React from "react";

const TableCompetitorAnalysis = () => {
  return (
    <div className="flex justify-center items-center text-background font-open-sans">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-3 px-4 border-b border-r border-gray-200 bg-purple-200">
              Key Features
            </th>
            <th className="py-3 px-4 border-b border-r border-gray-200 bg-purple-200">
              Evernote
            </th>
            <th className="py-3 px-4 border-b border-r border-gray-200 bg-purple-200">
              Padlet
            </th>
            <th className="py-3 px-4 border-b border-r border-gray-200 bg-purple-200">
              Miro
            </th>
            <th className="py-3 px-4 border-b border-r border-gray-200 bg-purple-200">
              Coffee Memory
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4 border-b border-r border-gray-200">
              Simple and intuitive interface
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b border-r border-gray-200">
              Easy to share notes visually
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b border-r border-gray-200">
              Give reviews
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b border-r border-gray-200">
              Designed for coffee shops
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-b border-r border-gray-200 text-green-500 text-center">
              O
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-r border-gray-200">
              Personal note sharing
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-red-500 text-center">
              X
            </td>
            <td className="py-3 px-4 border-r border-gray-200 text-green-500 text-center">
              O
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCompetitorAnalysis;
