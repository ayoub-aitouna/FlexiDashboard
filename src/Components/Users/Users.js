import { useState, useEffect } from "react";
import User from "./User";
import { BaseUrl } from "../../config";
import Cookies from "js-cookie";

function Users() {
  const [UsersList, setUsersList] = useState([]);
  useEffect(() => {
    const user = Cookies.get("accesToken");

    fetch(`${BaseUrl}/profile/GetAllUsers`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className='w-full h-full  relative  left-0  lg:mr-64'>
        <div className='flex items-start  mb-4 flex-col mr-3'>
          <h3 className='text-xl font-bold leading-none text-gray-900  p-4 sm:p-6 '>
            المستخدمين
          </h3>{" "}
          <div className='mt-1 relative lg:w-96'>
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <svg
                width='13.47'
                height='15'
                viewBox='0 0 14 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M7.00319 0.518677C10.5728 0.518677 13.4764 3.42226 13.4764 6.9919C13.4764 8.67605 12.8301 10.2121 11.7725 11.3649L13.8536 13.4417C14.0484 13.6364 14.049 13.9515 13.8543 14.1463C13.7572 14.2447 13.6289 14.2932 13.5013 14.2932C13.3743 14.2932 13.2467 14.2447 13.149 14.1476L11.0427 12.0472C9.93473 12.9346 8.52988 13.4658 7.00319 13.4658C3.43354 13.4658 0.529297 10.5616 0.529297 6.9919C0.529297 3.42226 3.43354 0.518677 7.00319 0.518677ZM7.00319 1.51578C3.98328 1.51578 1.52641 3.97199 1.52641 6.9919C1.52641 10.0118 3.98328 12.4687 7.00319 12.4687C10.0224 12.4687 12.4793 10.0118 12.4793 6.9919C12.4793 3.97199 10.0224 1.51578 7.00319 1.51578Z'
                  fill='#BABABA'
                />
              </svg>
            </div>
            <input
              type='text'
              name='email'
              id='topbar-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pr-10 p-2.5'
              placeholder='  ابحث عن عنصر'
            />
          </div>
        </div>{" "}
        <div className='flow-root'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='p-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider  w-3/6'>
                  <input type='checkbox' name='' id='' />
                  <span className='m-2'> اسم المستخدم</span>
                </th>{" "}
                <th
                  scope='col'
                  className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider '>
                  نوع الباقة
                </th>{" "}
                <th
                  scope='col'
                  className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider '>
                  ID
                </th>{" "}
                <th
                  scope='col'
                  className='p-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider '>
                  مدة الإشتراك{" "}
                </th>{" "}
                <th
                  scope='col'
                  className='p-4 text-right text-xs font-medium text-gray-500 flex flex-row justify-end gap-2 pl-10 w-full'>
                  <svg
                    width='20'
                    height='21'
                    viewBox='0 0 20 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M16.9832 7.01604C17.1921 7.01604 17.3816 7.10719 17.5314 7.26119C17.671 7.42566 17.7413 7.62994 17.7209 7.84575C17.7209 7.91699 17.1625 14.9779 16.8436 17.9499C16.6439 19.7738 15.4682 20.8811 13.7045 20.9115C12.3484 20.9419 11.0229 20.9524 9.7177 20.9524C8.33205 20.9524 6.97696 20.9419 5.6616 20.9115C3.95704 20.8707 2.78025 19.7434 2.59074 17.9499C2.26267 14.9674 1.71452 7.91699 1.70433 7.84575C1.69414 7.62994 1.76343 7.42566 1.90403 7.26119C2.0426 7.10719 2.24229 7.01604 2.45218 7.01604H16.9832ZM11.8768 0C12.8029 0 13.6302 0.646375 13.8697 1.56827L14.0408 2.33302C14.1794 2.95635 14.7194 3.39739 15.3409 3.39739H18.3955C18.803 3.39739 19.1423 3.73577 19.1423 4.16634V4.56443C19.1423 4.98452 18.803 5.33338 18.3955 5.33338H1.033C0.624438 5.33338 0.285156 4.98452 0.285156 4.56443V4.16634C0.285156 3.73577 0.624438 3.39739 1.033 3.39739H4.08756C4.70805 3.39739 5.24805 2.95635 5.38763 2.33407L5.54759 1.6196C5.79619 0.646374 6.61434 0 7.55068 0H11.8768Z'
                      fill='#898989'
                    />
                  </svg>
                  <svg
                    width='20'
                    height='21'
                    viewBox='0 0 20 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10.7038 0C11.496 0 12.2133 0.44 12.6095 1.08952C12.8022 1.40381 12.9307 1.79143 12.8985 2.2C12.8771 2.51429 12.9735 2.82857 13.1448 3.1219C13.6908 4.01238 14.9006 4.34762 15.8427 3.84476C16.9027 3.23714 18.2409 3.60381 18.8512 4.64095L19.5685 5.87714C20.1895 6.91429 19.8469 8.24476 18.7763 8.8419C17.8662 9.37619 17.545 10.56 18.0911 11.461C18.2624 11.7438 18.4551 11.9848 18.7548 12.1314C19.1296 12.3305 19.4186 12.6448 19.622 12.959C20.0182 13.6086 19.9861 14.4048 19.6006 15.1067L18.8512 16.3638C18.4551 17.0343 17.7163 17.4533 16.9562 17.4533C16.5815 17.4533 16.1639 17.3486 15.8213 17.139C15.543 16.961 15.2218 16.8981 14.8792 16.8981C13.8193 16.8981 12.9307 17.7676 12.8985 18.8048C12.8985 20.0095 11.9136 20.9524 10.6823 20.9524H9.2263C7.98438 20.9524 6.99941 20.0095 6.99941 18.8048C6.978 17.7676 6.08938 16.8981 5.02946 16.8981C4.67616 16.8981 4.35497 16.961 4.08732 17.139C3.74472 17.3486 3.31647 17.4533 2.95246 17.4533C2.18161 17.4533 1.44288 17.0343 1.04675 16.3638L0.308021 15.1067C-0.0881094 14.4257 -0.109522 13.6086 0.286608 12.959C0.457908 12.6448 0.779095 12.3305 1.14311 12.1314C1.44288 11.9848 1.63559 11.7438 1.8176 11.461C2.35291 10.56 2.03172 9.37619 1.12169 8.8419C0.0617777 8.24476 -0.280821 6.91429 0.329433 5.87714L1.04675 4.64095C1.66771 3.60381 2.99528 3.23714 4.0659 3.84476C4.99735 4.34762 6.20715 4.01238 6.75317 3.1219C6.92447 2.82857 7.02082 2.51429 6.99941 2.2C6.978 1.79143 7.09576 1.40381 7.29918 1.08952C7.69531 0.44 8.41263 0.0209524 9.19418 0H10.7038ZM9.96503 7.5219C8.28415 7.5219 6.92447 8.84191 6.92447 10.4867C6.92447 12.1314 8.28415 13.441 9.96503 13.441C11.6459 13.441 12.9735 12.1314 12.9735 10.4867C12.9735 8.84191 11.6459 7.5219 9.96503 7.5219Z'
                      fill='#898989'
                    />
                  </svg>
                </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody className='bg-white '>
              {" "}
              {UsersList.map((items, index) => (
                <>
                  <User key={index} user={items} />
                </>
              ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Users;
