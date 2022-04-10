import React from "react";

function LatestTransactions() {
  const array1 = [];

  return (
    <>
      <div
        className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  overflow-hidden'
        style={{ "min-height": "50vh" }}>
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex  flex-col items-start'>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              اخر التحويلات
            </h3>
            <span className='text-base font-normal text-gray-500'>
              قائمة لأخر المشتركين في فلكسي
            </span>
          </div>
          <div className='flex-shrink-0'>
            <a
              href='#'
              className='text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg p-2'>
              عرض الكل
            </a>
          </div>
        </div>
        <div className='flex flex-col mt-8'>
          <div className='overflow-x-auto rounded-lg'>
            <div className='align-middle inline-block min-w-full'>
              <div className='shadow overflow-hidden sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        التحويلات
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
                  <tbody className='bg-white '>
                    {array1.map((i) => (
                      <Item />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Item() {
  return (
    <>
      <tr>
        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
          تم الدفع من
          <span className='font-semibold'> محمد</span>
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
          23 أبريل 2022
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
          90 ريال
        </td>
      </tr>
    </>
  );
}

export default LatestTransactions;
