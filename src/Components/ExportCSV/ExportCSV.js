import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

function ExportCSV({ csvData, fileName }) {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div
      onClick={(e) => exportToCSV(csvData, fileName)}
      className='flex items-center justify-end flex-0 py-2 px-4 rounded-md 
text-border_color text-base font-bold gap-2 border-2 border-light_gray cursor-pointer '>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.99995 11.3493L7.98956 11.3492C7.90145 11.3476 7.81837 11.325 7.74503 11.2862C7.72038 11.2732 7.69669 11.2583 7.67418 11.2415C7.64702 11.2213 7.62177 11.1987 7.59875 11.1739L5.47216 9.02081C5.25802 8.80334 5.25876 8.45201 5.47362 8.23601C5.68922 8.02001 6.03682 8.02001 6.25096 8.23748L7.44995 9.45192V1.8881C7.44995 1.58188 7.69635 1.33334 7.99995 1.33334C8.30355 1.33334 8.54995 1.58188 8.54995 1.8881V9.45193L9.74895 8.23748C9.96308 8.02001 10.3107 8.02001 10.5263 8.23601C10.7411 8.45201 10.7419 8.80334 10.5277 9.02081L8.40116 11.1739C8.37813 11.1987 8.35288 11.2213 8.32572 11.2415C8.23711 11.3074 8.12824 11.347 8.01034 11.3492L7.99995 11.3493ZM3.91835 15H12.0877C13.8763 15 15.3327 13.5317 15.3327 11.7269V8.11434C15.3327 6.30583 13.8741 4.83387 12.0811 4.83387H11.3976C11.094 4.83387 10.8476 5.0824 10.8476 5.38863C10.8476 5.69486 11.094 5.94339 11.3976 5.94339H12.0811C13.2669 5.94339 14.2327 6.9168 14.2327 8.11434V11.7269C14.2327 12.9193 13.2698 13.8905 12.0877 13.8905H3.91835C2.73108 13.8905 1.76602 12.9171 1.76602 11.7195V8.10621C1.76602 6.9131 2.72815 5.94339 3.91175 5.94339H4.60182C4.90542 5.94339 5.15182 5.69486 5.15182 5.38863C5.15182 5.0824 4.90542 4.83387 4.60182 4.83387H3.91175C2.12168 4.83387 0.666016 6.30139 0.666016 8.10621V11.7195C0.666016 13.5288 2.12535 15 3.91835 15Z'
          fill='#3966FA'
        />
      </svg>
      <p className='font-normal '>تحميل التقرير</p>
    </div>
  );
}

export default ExportCSV;
