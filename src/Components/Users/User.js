import React from "react";
const getDurationName = (value) => {
  if (value == null) return "غير مشترك";
  if (value < 30) return "يوم" + value;
  if (value >= 30 && value < 365) {
    if (value == 30) return `  شهر `;
    if (value == 60) return ` شهرين `;
    return ` ${value / 30}شهور `;
  }
  if (value > 365) {
    if (value == 365) return `  سنة `;
    if (value == 365 * 2) return ` سنتين `;
    return ` ${value / 365} سنة   `;
  }
};
function User({ user }) {
  return (
    <>
      {" "}
      <tr className='border-b-2 border-b-b-border_color'>
        <td className='p-4 whitespace-nowrap text-sm  text-black  text-right flex flex-row items-center'>
          <input type='checkbox' name='' id='' />
          <div className='flex flex-col mr-2'>
            <h1 className='font-bold'> {user.full_name}</h1>
            <p className='text-gray-900 font-normal'> {user.phonenumber}</p>
          </div>
        </td>
        <td
          dir='ltr'
          className='p-4 whitespace-nowrap text-sm font-normal text-gray-500 '>
          {user.pack_name == null ? "غير مشترك" : user.pack_name}
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-200'>
          {user.user_id}
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
          {getDurationName(user.duration_days)}
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900 flex flex-row gap-5'>
          <button className='grid md:grid-cols-2 md:gap-2 bg-blue-700  py-3 px-6 rounded-xl text-white content-center items-center mr-auto '>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.3265 10.6355C11.6979 10.6355 12 10.9415 12 11.3178C12 11.6947 11.6979 12 11.3265 12H7.51979C7.14839 12 6.84631 11.6947 6.84631 11.3178C6.84631 10.9415 7.14839 10.6355 7.51979 10.6355H11.3265ZM8.68657 0.466042L9.66991 1.24719C10.0732 1.56251 10.342 1.97817 10.4339 2.41533C10.5401 2.8962 10.4269 3.36847 10.1085 3.77696L4.25093 11.3519C3.98211 11.6959 3.58594 11.8894 3.16148 11.8966L0.82693 11.9253C0.699591 11.9253 0.593475 11.8393 0.565178 11.7174L0.034599 9.41698C-0.057368 8.99416 0.034599 8.55701 0.303426 8.22018L4.45609 2.84532C4.52683 2.75932 4.65417 2.7457 4.73906 2.80948L6.48644 4.19978C6.59963 4.29295 6.75526 4.34311 6.91797 4.32161C7.26462 4.27861 7.49807 3.96329 7.4627 3.62646C7.44148 3.45447 7.35659 3.31114 7.2434 3.20364C7.20802 3.17497 5.54554 1.84201 5.54554 1.84201C5.43943 1.75601 5.41821 1.59835 5.5031 1.49157L6.16102 0.638038C6.76941 -0.143109 7.83057 -0.214774 8.68657 0.466042Z'
                fill='white'
              />
            </svg>
            <p className='hidden md:block'>تعديل</p>
          </button>
          <button className='grid md:grid-cols-2 bg-red-700 py-3 px-6 rounded-xl text-white content-center items-center ml-auto '>
            <svg
              width='11'
              height='12'
              viewBox='0 0 11 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.56344 4.01828C9.68306 4.01828 9.7916 4.07048 9.87738 4.15868C9.95732 4.25288 9.99759 4.36988 9.98592 4.49348C9.98592 4.53428 9.66614 8.57823 9.48349 10.2804C9.36912 11.325 8.69573 11.9592 7.68563 11.9766C6.90895 11.994 6.14978 12 5.40228 12C4.60867 12 3.83258 11.994 3.07924 11.9766C2.10299 11.9532 1.42901 11.3076 1.32047 10.2804C1.13258 8.57224 0.818636 4.53428 0.812801 4.49348C0.806966 4.36988 0.846646 4.25288 0.927173 4.15868C1.00653 4.07048 1.12091 4.01828 1.24111 4.01828H9.56344ZM6.63884 0C7.16927 0 7.6431 0.370196 7.78022 0.898191L7.87826 1.33619C7.95762 1.69318 8.26689 1.94578 8.62284 1.94578H10.3723C10.6057 1.94578 10.8 2.13958 10.8 2.38618V2.61417C10.8 2.85477 10.6057 3.05457 10.3723 3.05457H0.428312C0.194316 3.05457 0 2.85477 0 2.61417V2.38618C0 2.13958 0.194316 1.94578 0.428312 1.94578H2.17774C2.53311 1.94578 2.84238 1.69318 2.92233 1.33679L3.01394 0.927591C3.15632 0.370196 3.6249 0 4.16116 0H6.63884Z'
                fill='white'
              />
            </svg>
            <p className='hidden md:block'>حظر</p>
          </button>
        </td>
      </tr>
    </>
  );
}

export default User;
