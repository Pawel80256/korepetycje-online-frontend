import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Import the default time formats provided by the library
import 'moment/locale/pl';
import {BookVisitModal} from "../../clientComponents/visitBooking/BookVisitModal";

type Props = {
    dateTimes: Date[];

};

export const MyCalendar: React.FC<Props> = (props) => {
    const [isOpenBookVisitModal, setIsOpenBookVisitModal] = useState<boolean>(false)
    const {dateTimes} = props
    moment.locale('pl');
    const localizer = momentLocalizer(moment);

    const events = dateTimes.map((dateTime) => ({
        start: dateTime,
        end: new Date(dateTime.getTime() + 30 * 60 * 1000),
        title: 'Wolny termin',
    }));

    return (
        <>
            <Calendar
                localizer={localizer}
                defaultDate={moment().toDate()}
                defaultView="month"
                events={events}
                style={{height: '70vh'}}
                views={['month', 'day', 'agenda']}
                messages={{
                    today: 'Dzisiaj',
                    next: 'Później',
                    previous: 'Wcześniej',
                    month: 'Miesiąc',
                    week: 'Tydzień',
                    day: 'Dzień',
                    agenda: 'Wszystkie terminy'
                }}
                eventPropGetter={(event: any) => ({
                    style: {
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        borderRadius: '5px',
                        border: 'none',
                    },
                })}
                onSelectEvent={(event) => {
                    setIsOpenBookVisitModal(true)
                }}

            />
            <BookVisitModal open={isOpenBookVisitModal} setOpen={setIsOpenBookVisitModal}/>
        </>
    );
};