import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item width={"100%"}>
        <Header />
      </Grid>
      <Grid item padding={10} width={"100%"}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12} lg={5}>
            <ContactForm setContacts={setContacts} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <List sx={{ bgcolor: "primary.main" }}>
              {contacts.map((contact, idx) => (
                <>
                  <Contact data={contact} />
                  {idx + 1 < contacts.length ? (
                    <Divider variant="middle" component="li" />
                  ) : null}
                </>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
