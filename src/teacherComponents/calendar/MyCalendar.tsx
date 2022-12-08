import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Import the default time formats provided by the library
import 'moment/locale/pl';

type Props = {
    dateTimes: Date[];
};

export const MyCalendar = ({ dateTimes }: Props) => {
// Set the calendar to use Polish as its default language
    moment.locale('pl');
    const localizer = momentLocalizer(moment);

// Map dateTimes array to events array
    const events = dateTimes.map((dateTime) => ({
        start: dateTime,
        end: new Date(dateTime.getTime() + 30 * 60 * 1000),
        title: 'Wolny termin',
    }));

    return (
        <Calendar
            localizer={localizer}
            defaultDate={moment().toDate()}
            defaultView="month"
            events={events}
            style={{ height: '70vh' }}

            messages={{
                today: 'Dzisiaj',
                next: 'Później',
                previous: 'Wcześniej',
                month:'Miesiąc',
                week:'Tydzień',
                day:'Dzień',
                agenda:'Lista terminów'
            }}
            eventPropGetter={(event: any) => ({
                style: {
                    backgroundColor: '#00bcd4',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                },
            })}

        />
    );
};