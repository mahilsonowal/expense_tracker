import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MonthlySummary = ({ expenses }) => {
  const grouped = expenses.reduce((acc, exp) => {
    const month = new Date(exp.date).toLocaleString("default", { month: "long", year: "numeric" });
    acc[month] = (acc[month] || 0) + Number(exp.amount);
    return acc;
  }, {});

  return (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6">Monthly Summary</Typography>
        {Object.keys(grouped).map((month) => (
          <Typography key={month} variant="body1">
            {month}: ₹{grouped[month]}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default MonthlySummary;
