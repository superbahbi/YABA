"use client";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "../assets/icons";
import { ICalendarProps } from "../types/interface";

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

const Calendar: React.FC<ICalendarProps> = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs[][]>();
  const [daySelected, setDaySelected] = useState<dayjs.Dayjs>();

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const dayOfWeek: string[] = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  function getDayClass(day: dayjs.Dayjs) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "text-white bg-primary rounded-full";
    } else if (currDay === slcDay) {
      return "text-white bg-secondary rounded-full";
    }
    return;
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">
              {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
                "MMMM YYYY"
              )}
            </h1>
            <div className="flex items-center">
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
                  {dayOfWeek.map((day, i) => (
                    <th key={i}>
                      <div className="flex w-full justify-center">
                        <p className="text-md text-center font-medium">{day}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentMonth?.map((week, j) => (
                  <tr key={j}>
                    {week.map((day, k) => (
                      <td
                        key={k}
                        className="px-2 pt-4"
                        onClick={() => {
                          setDaySelected(day);
                        }}
                      >
                        <div className="h-full w-full">
                          <div className="flex w-full cursor-pointer items-center justify-center rounded-full">
                            <p
                              className={`text-md flex h-7 w-7 items-center justify-center font-light ${getDayClass(
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
