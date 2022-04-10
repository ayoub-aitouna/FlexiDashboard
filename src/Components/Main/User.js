import React from "react";

function User({ user }) {
  return (
    <>
      {" "}
      <tr>
        <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
          {user.full_name}
        </td>
        <td
          dir='ltr'
          className='p-4 whitespace-nowrap text-sm font-normal text-gray-500 '>
          {user.phonenumber}
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-200'>
          {user.created_date}
        </td>
        <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
          {user.price + " "} ريال
        </td>
      </tr>
    </>
  );
}

export default User;
