import React, { useState } from 'react';
import ScheduleInfo from '../ScheduleInfo/ScheduleInfo';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import date from 'date-and-time';
import { DayPicker } from 'react-day-picker';

const Schedule = () => {
    const initialDays: Date[] = [];
    const [days, setDays] = React.useState<Date[] | undefined>(initialDays);

    const handleForm = (e: any) => {
        e.preventDefault();
        const now = new Date();
        date.format(now, 'YYYY/MM/DD HH:mm:ss')
        const start = e.target.start.value;
        const end = e.target.end.value;

        const send = {
            start: start,
            end: end,
            days
        }
        console.log(send);
    }
    return (
        <div>
            <TimeAndDate handleForm={handleForm} days={days} setDays={setDays}></TimeAndDate>
            <ScheduleInfo></ScheduleInfo>
        </div>
    );
};

export default Schedule;