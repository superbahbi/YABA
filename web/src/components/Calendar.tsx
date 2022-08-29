import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "../assets/icons";
import { CalendarProps } from "../types/interface";
export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
const Calendar: React.FC<CalendarProps> = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs[][]>();
  const [daySelected, setDaySelected] = useState<dayjs.Dayjs>();

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const day_of_week: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  function getDayClass(day: dayjs.Dayjs) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "text-white bg-indigo-700 rounded-full";
    } else if (currDay === slcDay) {
      return "text-white bg-lime-700 rounded-full";
    } else {
      return "text-gray-500";
    }
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-800">
              {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
                "MMMM YYYY"
              )}
            </h1>
            <div className="flex items-center text-gray-800">
              <button onClick={() => setCurrentMonthIdx(currentMonthIdx - 1)}>
                <IconChevronLeft />
              </button>
              <button onClick={() => setCurrentMonthIdx(currentMonthIdx + 1)}>
                <IconChevronRight />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6">
            <table className="w-full">
              <thead>
                <tr>
                  {day_of_week.map((day) => (
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800">
                          {day}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentMonth?.map((week) => (
                  <tr>
                    {week.map((day) => (
                      <td
                        className="pt-2"
                        onClick={() => {
                          setDaySelected(day);
                        }}
                      >
                        <div className="w-full h-full">
                          <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <p
                              className={`text-sm w-7 h-7 flex items-center justify-center font-light ${getDayClass(
                                day
                              )}`}
                            >
                              {day.date()}
                            </p>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Calendar;
