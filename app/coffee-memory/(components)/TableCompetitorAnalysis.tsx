import React from "react";

interface Props {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const TableCompetitorAnalysis = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Props) => {
  return (
    <div
      className="flex text-[20px] justify-center items-center text-background font-open-sans"
      style={{
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,
      }}
    >
      <table className="min-w-full bg-white rounded-xl table-fixed">
        <thead>
          <tr>
            <th className="py-4 px-4 border-b border-r rounded-tl-xl border-gray-300 bg-purple-300 w-2/6">
              Key Features
            </th>
            <th className="py-4 px-4 border-b border-r border-gray-300 bg-purple-300 w-1/6">
              Evernote
            </th>
            <th className="py-4 px-4 border-b border-r border-gray-300 bg-purple-300 w-1/6">
              Padlet
            </th>
            <th className="py-4 px-4 border-b border-r border-gray-300 bg-purple-300 w-1/6">
              Miro
            </th>
            <th className="py-4 px-4 border-b rounded-tr-xl border-gray-300 bg-purple-300 w-1/6">
              Coffee Memory
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 px-4 border-b border-r border-gray-300 w-1/6">
              Simple and intuitive interface
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-r border-gray-300 w-1/6">
              Easy to share notes visually
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-r border-gray-300 w-1/6">
              Give reviews
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 border-b border-r border-gray-300 w-1/6">
              Designed for coffee shops
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-b border-r border-gray-300 text-green-500 text-center w-1/6">
              O
            </td>
          </tr>
          <tr>
            <td className="py-4 px-4 border-r border-gray-300 rounded-bl-xl w-1/6">
              Personal note sharing
            </td>
            <td className="py-4 px-4 border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-r border-gray-300 text-red-500 text-center w-1/6">
              X
            </td>
            <td className="py-4 px-4 border-gray-300 text-green-500 text-center rounded-br-xl w-1/6">
              O
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCompetitorAnalysis;
