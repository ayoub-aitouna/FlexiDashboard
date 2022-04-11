import { useRef, useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import Cookies from "js-cookie";

import {
  LatestUsers,
  LatestTransactions,
  Footer,
  Acquisition_Overview,
  Loading,
} from "../index";
import { BaseUrl, MonthsNames } from "../../config.js";

function Main() {
  const [UsersList, setUsersList] = useState([]);
  const [Sub, setSub] = useState([]);
  const [thismonthList, sethismonthList] = useState([]);
  const [prices, setprices] = useState([]);
  const MainChart = useRef();
  let now = new Date();
  let thiMonth = new Date(now);
  let [start, end] = getWeekDates();
  let price = 0;
  function Persentage(list) {
    const pervmonthList = list.filter((item) => {
      const date = new Date(item.created_date);
      return date.getMonth() == thiMonth.getMonth() - 1;
    });
    return (
      ((thismonthList.length - pervmonthList.length) / thismonthList.length) *
      100
    );
  }
  const Categories = () => {
    let list = [];
    for (let i = thiMonth.getDate(); i < thiMonth.getDate() + 7; i++) {
      list.push(MonthsNames[thiMonth.getMonth()] + ":" + i);
    }
    return list;
  };
  const fetchData = (token) => {
    fetch(`${BaseUrl}/profile/GetAllUsers`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data);

        const month = data.filter((item) => {
          const date = new Date(item.created_date);
          if (date >= start) {
            price += item.price;
          }
          return date.getMonth() == thiMonth.getMonth();
        });
        sethismonthList(month);
        setprices(price);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const list = (data) => {
    const list = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < data.length; i++) {
      list.push(data[i].price == null ? 0 : data[i].price);
    }
    return list;
  };
  const fetchSub = (token) => {
    fetch(`${BaseUrl}/profile/GetLatestSub`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSub(data);
        const options = {
          chart: {
            height: 420,
            type: "area",
            fontFamily: "Inter, sans-serif",
            foreColor: "#747373",
            toolbar: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            style: {
              fontSize: "14px",
              fontFamily: "Vazirmatn, sans-serif",
            },
          },
          grid: {
            show: false,
          },
          series: [
            {
              name: "Revenue",
              data: list(data),
              color: "#527AFF",
            },
          ],

          xaxis: {
            categories: Categories(),
            labels: {
              style: {
                colors: ["#747373"],
                fontSize: "14px",
                fontWeight: 500,
              },
            },
            axisBorder: {
              color: "#747373",
            },
            axisTicks: {
              color: "#747373",
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: ["#747373"],
                fontSize: "14px",
                fontWeight: 500,
              },
              formatter: function (value) {
                return "$" + value;
              },
            },
          },
          responsive: [
            {
              breakpoint: 1024,
              options: {
                xaxis: {
                  labels: {
                    show: false,
                  },
                },
              },
            },
          ],
        };
        const chart = new ApexCharts(MainChart.current, options);
        chart.render();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData(Cookies.get("accesToken"));
    fetchSub(Cookies.get("accesToken"));
  }, []);

  return (
    <>
      <div className='h-fit w-full bg-gray-50 relative  left-0  lg:mr-64'>
        <main className='pl-10 pr-10'>
          <div className='pt-6 px-4'>
            <div className='w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 '>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex-shrink-0 flex flex-row gap-5 items-center'>
                    <div className='flex flex-col md:flex-row items-start gap-5 md:items-center'>
                      <p className='text-2xl sm:text-3xl leading-none font-bold text-black tracking-wider'>
                        {prices} ريال
                      </p>
                      <h3 className='text-base font-normal text-gray-300 tracking-wider'>
                        اشتراكات هذا الأسبوع
                      </h3>
                    </div>

                    <div className='flex items-center justify-center text-sm flex-1 text-green-500 bg-green-50 px-2 py-2 rounded-md font-bold'>
                      {Persentage(Sub)}%
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div dir='ltr' id='main-chart' ref={MainChart} />
              </div>
              <LatestTransactions />{" "}
            </div>
            <div className='mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                      {Sub.length} مشترك
                    </span>
                    <h3 className='text-base font-normal text-gray-500'>
                      المشتركين الجدد هذا الشهر
                    </h3>
                  </div>
                  <div className='ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                    {Persentage(Sub)}%
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                      0 مبيعة
                    </span>
                    <h3 className='text-base font-normal text-gray-500'>
                      المبيعات لهذا الشهر
                    </h3>
                  </div>
                  <div className='ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                    0%
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                      {UsersList.length} حساب
                    </span>
                    <h3 className='text-base font-normal text-gray-500'>
                      المسجلين لهذا الشهر
                    </h3>
                  </div>
                  <div className='ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold'>
                    {Persentage(UsersList)}%
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        d='M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4 gap-3'>
              <LatestUsers />
              <Acquisition_Overview />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
function filterDatesByCurrentWeek(dates) {
  let [start, end] = getWeekDates();
  return dates.filter((d) => +d >= +start && +d < +end);
}

function getWeekDates() {
  let now = new Date();
  let dayOfWeek = now.getDay(); //0-6
  let numDay = now.getDate();

  let start = new Date(now); //copy
  start.setDate(numDay - dayOfWeek);
  start.setHours(0, 0, 0, 0);

  let end = new Date(now); //copy
  end.setDate(numDay + (7 - dayOfWeek));
  end.setHours(0, 0, 0, 0);

  return [start, end];
}

export default Main;
