import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import 'date-fns';
import './custome-calender-component.css'

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
    <div className="calender-container">   
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <DatePicker
        autoOk
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </MuiPickersUtilsProvider>
    </div>
    </>
  );
};

export default StaticDatePicker;
