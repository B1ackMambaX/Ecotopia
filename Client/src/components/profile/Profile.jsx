import { CssBaseline, Box, Avatar, Typography, TextField  } from "@mui/material";

const Profile = ({user}) => {
    const {firstName, lastName, email} = user;
    return (
        <section className="profile">
            <CssBaseline/>
            <Box sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
            <Typography color={'var(--green)'} variant="h5" component="h2" textAlign="center" mb={2}>Профиль</Typography>
            <Avatar sx={{ bgcolor: 'var(--green)' }}>N</Avatar>
            <TextField sx={{width: '300px', mt: '30px'}} disabled label="Email" defaultValue={email}/>
            <TextField sx={{width: '300px', mt: '30px'}} disabled label="Имя" defaultValue={firstName}/>
            <TextField sx={{width: '300px', mt: '30px', mb: '200px'}} disabled label="Фамилия" defaultValue={lastName}/>
            </Box>
        </section>
    );
};

export default Profile;