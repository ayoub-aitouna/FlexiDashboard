import React, { useState } from "react";
import SaleItem from "./SaleItem";
function Acquisition_Overview() {
  const [sales, setSales] = useState([]);

  return (
    <>
      <div className='bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-xl font-bold leading-none text-gray-900'>
            اخر المبيعات
          </h3>
          {sales.length != 0 ? (
            <a
              href='#'
              className='text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2'>
              عرض الكل
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className='flow-root overflow-x-scroll h-full max-h-96 md:overflow-auto'>
          {sales.length == 0 ? (
            <div className='h-full w-full grid place-content-center'>
              <h1 className='text-lg font-extrabold  tracking-widest '>
                لايوجد بيانات
              </h1>
            </div>
          ) : (
            <table className='min-w-full divide-y divide-gray-200 w-full'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    المشترك
                  </th>
                  <th
                    scope='col'
                    className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    ﺐﻠﻄﻟا ﻢﻗر
                  </th>
                  <th
                    scope='col'
                    className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    التاريخ
                  </th>
                  <th
                    scope='col'
                    className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    القيمة
                  </th>
                </tr>
              </thead>
              <tbody className='bg-red-500  w-full'>
                {sales.map((i) => (
                  <SaleItem />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Acquisition_Overview;
