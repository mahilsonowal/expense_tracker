import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TotalCard = ({ total }) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6">Total Expenses</Typography>
        <Typography variant="h4" color="primary">
          ₹{total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalCard;
