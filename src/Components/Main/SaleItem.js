import React from "react";

function SaleItem() {
  return (
    <>
      {" "}
      <tr>
        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
          محمد إبن محمد
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
          #949110
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-200'>
          23 أبريل 2022
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
          90 ريال
        </td>
      </tr>{" "}
    </>
  );
}

export default SaleItem;
