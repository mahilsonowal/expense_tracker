import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
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
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            width: "100%",
            maxWidth: 500,
            boxShadow: "0px 6px 25px rgba(0,0,0,0.15)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              mb: 3,
            }}
          >
            Daily Expense Tracker
          </Typography>

          <ExpenseForm onAddExpense={addExpense} />
          <MonthlySummary expenses={expenses} />
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </Paper>
      </Container>
    </Box>
  );
};

export default App;
