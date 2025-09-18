import React, { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";

const categories = ["Food", "Transport", "Shopping", "Bills", "Others"];

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date) return;

    const newExpense = {
      amount: parseFloat(amount),
      category,
      date,
    };

    onAddExpense(newExpense);

    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        select
        label="Category"
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ mb: 2 }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Date"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
