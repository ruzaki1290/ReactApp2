# Reservation System

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for developing responsive and mobile-first websites.
- **CSS**: Custom styling for the application.

## Changes Made

### Refactoring to Use Classes

Previously, the application used inline styles and other methods for styling and layout. The application has been refactored to use Bootstrap classes and custom CSS classes for a cleaner and more maintainable codebase.

- **Bootstrap Classes**: Utilized Bootstrap classes such as `d-flex`, `justify-content-between`, `btn`, and others to handle layout and styling.
- **Custom CSS**: Added custom CSS classes in `App.css` to handle specific styling needs, such as borders, padding, and margins for the time slot items and reservation list items.

## Features

- **Select Conservation Area**: Users can select a conservation area from a list of buttons.
- **Select Time Slot**: Users can select a time slot from a list of available slots.
- **Make Reservation**: Users can make a reservation by selecting an area and a time slot, and clicking the "Reserve" button.
- **View Reservations**: Users can view a list of their reservations.
- **Delete Reservation**: Users can delete a reservation by clicking the "Delete" button next to the reservation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/reservation-system.git

2. Navigate to the project directory:

   ```bash
   cd reservation-system

3. Install the dependencies:

   ```bash
   npm install

4. Start the application:

   ```bash
   npm start

## Usage

1. Open the application in a web browser.
2. Select a conservation area from the list of buttons.
3. Select a time slot by clicking the "Select" button next to the desired time slot.
4. Click the "Reserve" button to make a reservation.
5. View your reservations in the list below the form.
6. Delete a reservation by clicking the "Delete" button next to the reservation.

## Custom CSS Classes

The following custom CSS classes have been added to `App.css` to handle specific styling needs:

- .time-slot-item: Styles for the time slot items, including borders, padding, and margins.
- .selected: Styles for the selected time slot item, including background color and text color.
- .reservations-list: Styles for the reservations list, including list style and padding.
- .reserve-button: Styles for the reserve button, including background color, text color, padding, and border radius.

## Conclusion

This project demonstrates how to build a simple reservation system using React and Bootstrap. The application has been refactored to use Bootstrap classes and custom CSS for a cleaner and more maintainable codebase. The styling changes ensure a consistent and responsive user interface. ```

## License

This project is open source and available under the [MIT License](LICENSE). ```