import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from 'phosphor-react';
import { Button, DatePicker, Popover } from 'keep-react';
import '../../assets/css/Map.css'; // Importa el archivo CSS para los estilos del mapa

function MapaGoogle() {
  const [date, setDate] = useState(null);
  const [licensePlate, setLicensePlate] = useState('');
  const [time, setTime] = useState('');

  // Manejador de cambio para la fecha seleccionada
  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
  };

  // Manejador de cambio para el campo de placa
  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  // Manejador de cambio para la hora seleccionada
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  // Manejador para el envío del formulario de reserva
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para manejar la reserva
    console.log('Fecha:', date);
    console.log('Placa del vehículo:', licensePlate);
    console.log('Hora:', time);
  };

  return (
    <div className="map-container">
      <div className="map-wrapper">
        {/* Mapa de Google */}
        <iframe
          title="Mapa de Google"
          src="https://www.google.com/maps/d/u/1/embed?mid=1XRxo2vupBtHo1ZMec7xWXkE77lVx6uc&ehbc=2E312F"
          width="640"
          height="480"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="reservation-form">
        {/* Formulario de reserva */}
        <h2>Reservar</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="vehiclePlate">Placa del vehículo:</label>
            <input
              type="text"
              id="vehiclePlate"
              name="vehiclePlate"
              value={licensePlate}
              onChange={handleLicensePlateChange}
            />
          </div>
          <div>
            <label htmlFor="datepicker">Fecha:</label>
            {/* Componente de calendario */}
            <DatePickerComponent onDateSelect={handleDateSelect} />
          </div>
          <div>
            <label htmlFor="timePicker">Hora:</label>
            <input
              type="time"
              id="timePicker"
              name="timePicker"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <button type="submit">Reservar</button>
        </form>
      </div>
    </div>
  );
}

// Componente DatePickerComponent
const DatePickerComponent = ({ onDateSelect }) => {
  const [date, setDate] = useState(null);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    onDateSelect(selectedDate);
  };

  return (
    <Popover showArrow={false} placement="bottom-start">
      <Popover.Action asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary"
        >
          <Calendar size={20} color="#AFBACA" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Selecciona tu fecha</span>}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker mode="single" selected={date} onSelect={handleDateSelect} showOutsideDays={true} />
      </Popover.Content>
    </Popover>
  );
};

export default MapaGoogle;
