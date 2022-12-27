import React, {useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Import the default time formats provided by the library
import 'moment/locale/pl';
import {BookVisitModal} from "../../clientComponents/visitBooking/BookVisitModal";
import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {Roles} from "../../app/enums/Roles";
import {useSnackbar} from "notistack";

type Props = {
    appointments: AppointmentDto[]
};

export const MyCalendar: React.FC<Props> = (props) => {
    const [isOpenBookVisitModal, setIsOpenBookVisitModal] = useState<boolean>(false)
    const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>('')
    const {appointments} = props
    const role = localStorage.getItem("role")
    const { enqueueSnackbar } = useSnackbar();

    moment.locale('pl');
    const localizer = momentLocalizer(moment);

    const events = appointments.map((appointment) => ({
        start: new Date(appointment.date),
        end: new Date(new Date(appointment.date).getTime() + 30 * 60 * 1000),
        title: 'Termin',
        subject:appointment.subject,
        appointmentId: appointment.id
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
                eventPropGetter={(event: any) => (
                    event.subject === null ?
                    {
                    style: {
                        backgroundColor: '#1976d2',
                        color: 'white',
                        borderRadius: '5px',
                        border: 'none',
                    },
                } :
                        {
                            style: {
                                backgroundColor: '#E13C3C',
                                color: 'white',
                                borderRadius: '5px',
                                border: 'none',
                            },
                        }
                )}
                onSelectEvent={(event) => {

                    if(role === Roles.CLIENT){
                        if(event.subject !== null){
                            enqueueSnackbar("Ten termin jest już zajęty",{variant:'warning'})
                        }
                        else{
                            setSelectedAppointmentId(event.appointmentId)
                            setIsOpenBookVisitModal(true)
                        }
                    }
                    if(role === ""){
                        enqueueSnackbar("Rezerwacja terminu wymaga zalogowania, zaloguj się lub stwórz konto.", { variant: 'warning' });
                    }

                    console.log(event)
                }}

            />
            <BookVisitModal open={isOpenBookVisitModal} setOpen={setIsOpenBookVisitModal}
                            appointmentId={selectedAppointmentId}/>
        </>
    );
};