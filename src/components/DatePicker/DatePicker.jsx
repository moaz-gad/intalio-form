import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./datePicker.module.css";

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className={styles.datePicker}>
      <ReactDatePicker
        selected={selectedDate}
        onChange={onDateChange}
        className={styles.input}
        placeholderText="dd/mm/yyyy"
      />
    </div>
  );
};

export default DatePicker;
