// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/data.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={data.name}
            src={data.photo}
            sx={{ width: 75, height: 75, mr: 3 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography component="span" color="text.primary" fontWeight={500}>
              {data.name}
            </Typography>
          }
          secondary={
            <Grid container direction="column">
              <Typography component="span" color="text.secondary">
                {data.phone}
              </Typography>
              <Typography component="span" color="text.secondary">
                {data.email}
              </Typography>
            </Grid>
          }
        />
      </ListItem>
    </>
  );
};

export default Contact;
