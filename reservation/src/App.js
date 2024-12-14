import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const conservationAreas = ['Area 1', 'Area 2', 'Area 3', 'Area 4'];
const timeSlots = [
  '9:00am - 12:00pm',
  '12:00pm - 3:00pm',
  '3:00pm - 6:00pm'
];

const App = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [reservations, setReservations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const isDuplicate = reservations.some(
      (reservation) => reservation.area === selectedArea && reservation.timeSlot === selectedTimeSlot
    );

    if (isDuplicate) {
      setErrorMessage('This time slot is already reserved for the selected area.');
    } else if (selectedArea && selectedTimeSlot) {
        setReservations([...reservations, { area: selectedArea, timeSlot: selectedTimeSlot }]);
        setSelectedArea('');
        setSelectedTimeSlot('');
        setErrorMessage('');
      }
    };

  const handleDelete = (index) => {
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark text-white p-2 text-center">
          <span className="navbar-brand ml-2">RESERVATION SYSTEM</span>
        </div>
      </div>
      <div className="row text-white">
        <div className="col-3 p-2">
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-outline-primary">
              Home
            </button>
            {conservationAreas.map((area) => (
              <button
                key={area}
                type="button"
                className={`btn btn-outline-primary ${selectedArea === area ? 'active' : ''}`}
                onClick={() => setSelectedArea(area)}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
        <div className="col-9 p-2 text-dark">
          <form onSubmit={handleSubmit} className="reservation-form">
            <div>
              <label>
                <h4>Select Time Slot:</h4>
                <ul className="time-slot-list">
                  {timeSlots.map((slot) => (
                    <li key={slot}>
                      <input
                        type="radio"
                        name="timeSlot"
                        value={slot}
                        checked={selectedTimeSlot === slot}
                        onChange={handleTimeSlotChange}
                      />
                      {slot}
                    </li>
                  ))}
                </ul>
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Reserve</button>
          </form>
          {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
          <hr />
          <h5>Reservations:</h5>
          <ul className="list-group">
            {reservations.map((reservation, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {reservation.area} - {reservation.timeSlot}
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;