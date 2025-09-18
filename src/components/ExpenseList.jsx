import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <List>
      {expenses.map((exp) => (
        <React.Fragment key={exp.id}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={() => onDelete(exp.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`₹${exp.amount} | ${exp.category || "N/A"}`}
              secondary={`Date: ${exp.date}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ExpenseList;
