import {Button, Grid, Typography} from "@mui/material";

const HomePage = () => {
    return (
        <Grid container justifyContent="center">
            <Typography variant="h2">
                Home page
                <Button variant="contained"
                    sx={{
                        mr: 2,
                        backgroundColor: "#88D3B8",
                        color: "#ffffff",
                        '&:hover': {
                            backgroundColor: "#4FA888",
                        }
                    }}
                >
                    -
                </Button>
                <Button variant="contained" sx={{mr: 2, backgroundColor: "#88D3B8", color: "#ffffff", '&:hover': {backgroundColor: "#4FA888",}}}>
                    +
                </Button>
            </Typography>
        </Grid>
    );
};

export default HomePage;