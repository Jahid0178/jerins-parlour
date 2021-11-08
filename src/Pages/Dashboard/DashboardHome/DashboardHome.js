import { Grid } from "@mui/material";
import React from "react";
import Calendar from "../../Shared/Calendar.js/Calendar";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Calendar date={date} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        2
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
