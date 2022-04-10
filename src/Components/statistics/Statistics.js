import { useRef, useEffect } from "react";
import {
  Side,
  LatestUsers,
  LatestTransactions,
  Footer,
  Nav,
  Acquisition_Overview,
} from "../index";
import ApexCharts from "apexcharts";
import ExportCSV from "../ExportCSV/ExportCSV";
function Statistics() {
  const MainChart = useRef();
  const DonutRef = useRef();

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
        data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
        color: "#527AFF",
      },
    ],

    xaxis: {
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ],
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

  var options1 = {
    series: [50, 30, 30, 10],
    colors: ["#553AFE", "#01C0F6", "#FF8000", "#FFBA34"],
    chart: {
      type: "donut",
      width: 300,
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    fill: {
      type: "solid",
    },
    stroke: {
      show: true,
      curve: "stepline",
      lineCap: "round",
      width: 10,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],

    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            size: "15%",
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              offsetY: -5,
            },
            value: {
              show: true,
              fontSize: "11px",
              color: undefined,
              offsetY: +5,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              label: "المجموع",
              color: "#000",
              fontSize: 21,
              fontWeight: "bold",
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) + " ريال "
                );
              },
            },
          },
        },
      },
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(MainChart.current, options);
    chart.render();
    const chart1 = new ApexCharts(DonutRef.current, options1);
    chart1.render();
  }, []);
  return (
    <>
      <div className='h-fit w-full bg-gray-50 relative  left-0  lg:mr-64'>
        <main className='pl-10 pr-10'>
          <div className='pt-6 px-4'>
            <div className='mb-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                      1820 مشترك
                    </span>
                    <h3 className='text-base font-normal text-gray-500'>
                      المشتركين الجدد هذا الشهر
                    </h3>
                  </div>
                  <div className='ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                    14.6%
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
                      1820 مبيعة
                    </span>
                    <h3 className='text-base font-normal text-gray-500'>
                      المبيعات لهذا الشهر
                    </h3>
                  </div>
                  <div className='ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                    32.9%
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
                      1820 حساب
                    </span>
                    <h3 className='text-base font-normal text-gray-500'>
                      المسجلين لهذا الشهر
                    </h3>
                  </div>
                  <div className='ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold'>
                    -2.7%
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

            <div className='w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2'>
                <div className='flex  w-full items-center justify-between mb-4'>
                  <div className='  flex flex-col sm:flex-row   items-start sm:items-center gap-5'>
                    <h3 className='text-base  font-black  text-3xl text-gray-900'>
                      394,499 ريال
                    </h3>
                    <p className='text-gray-400 '>اشتراكات هذا الأسبوع</p>
                    <div className='flex items-center justify-center  w-fit rounded-md py-2 px-2  bg-green-50 text-green-500  font-bold  '>
                      <p className='flex-0'> 12.5%</p>

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

                  <ExportCSV csvData={["a", "b", "s"]} fileName={"file"} />
                </div>
                <div dir='ltr' id='main-chart' ref={MainChart} />
              </div>

              <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  overflow-hidden  '>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex-shrink-0'>
                    <h3 className='text-base font-black text-3xl text-gray-900'>
                      مصادر الأرباح
                    </h3>
                  </div>
                  <ExportCSV csvData={["a", "b", "s"]} fileName={"file"} />
                </div>
                <div className='h-full flex  flex-col items-center'>
                  <div
                    id='main-chart'
                    className=' w-fit mr-auto ml-auto '
                    ref={DonutRef}
                  />
                  <div className='h-full w-full  '>
                    <ul className='w-full h-full flex flex-col gap-6 py-10  '>
                      <InComeItem />
                      <InComeItem />
                      <InComeItem />
                      <InComeItem />
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4 gap-3'>
              <LatestUsers />
              <LatestTransactions />{" "}
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

function InComeItem() {
  return (
    <li className='flex flex-row justify-between'>
      <div className=' grid grid-cols-[10px,1fr] items-center gap-1'>
        <div className='flex-0 rounded-full bg-orange-500 w-1 aspect-square'></div>
        <p className='font-light text-sm text-gray-400'>ارباح الإشتراكات</p>
      </div>
      <h3 className='font-semibold'>493.621 ريال</h3>
    </li>
  );
}

export default Statistics;
