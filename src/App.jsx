import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalCard from "./components/TotalCard";
import MonthlySummary from "./components/MonthlySummary";
import { supabase } from "./supabaseClient";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Fetch expenses from Supabase
  const fetchExpenses = async () => {
    let { data, error } = await supabase
      .from("expenses")
      .select("*")
      .order("date", { ascending: false });
    if (error) console.error(error);
    else setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    const { data, error } = await supabase
      .from("expenses")
      .insert([expense])
      .select();
    if (!error) setExpenses([data[0], ...expenses]);
  };

  const deleteExpense = async (id) => {
    const { error } = await supabase.from("expenses").delete().eq("id", id);
    if (!error) setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Container maxWidth="100%">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: 3,
            width: "100%",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Daily Expense Tracker
          </Typography>

          <ExpenseForm onAddExpense={addExpense} />
          <TotalCard total={total} />
          <MonthlySummary expenses={expenses} />
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </Paper>
      </Container>
    </Box>
  );
};

export default App;
