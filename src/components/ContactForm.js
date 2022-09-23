// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";

const ContactForm = ({ setContacts }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [form, setForm] = useState({
    name: null,
    phone: null,
    email: null,
    photo: null,
  });

  function handleChange(formName, value) {
    setForm((s) => ({ ...s, [formName]: value }));
  }

  function handleSubmit() {
    setContacts((s) => [...s, form]);
  }

  return (
    <Card sx={{ bgcolor: "secondary.main", py: 2 }}>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Name"
              variant="filled"
              required
              fullWidth
              defaultValue={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              variant="filled"
              required
              fullWidth
              defaultValue={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              variant="filled"
              required
              fullWidth
              defaultValue={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Photo URL"
              variant="filled"
              required
              fullWidth
              defaultValue={form.photo}
              onChange={(e) => handleChange("photo", e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        {/* Buatlah handler untuk menambahkan kontak baru yang akan
                dikirim ke ContactForm */}
        <Button color="success" sx={{ px: 2 }} onClick={handleSubmit}>
          Add New
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactForm;
