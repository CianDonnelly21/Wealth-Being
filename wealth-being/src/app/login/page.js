'use client';

    import Avatar from '@mui/material/Avatar';

    import Button from '@mui/material/Button';

    import TextField from '@mui/material/TextField';

    import FormControlLabel from '@mui/material/FormControlLabel';

    import Link from '@mui/material/Link';

    import Container from '@mui/material/Container';

    import Box from '@mui/material/Box';


    export default function loginPage() {

        const handleSubmit = (event) => {
            console.log("Handling Submit");
            event.preventDefault();

        const data = new FormData(event.currentTarget);
            let email = data.get("Email")
            let password = data.get("Password")

            console.log("Sent Email: " + email)
            console.log("Sent Password: " + password)

            {/* Insert DB here */}
        };

        {/* Insert DB logic for checking to see if the user logging in is actually registered */}

//*****************************************************************************************************************
//Line 10:
    //When an occurence happens in the browser (event), the browser looks for something that is
        //Designed to handle it then calls the function

//Line 14:
    //Create an object to use the in built tool (FormData) so that when the event currentTarget (current form)
          //Is submitted the email and password are retrieved (FormData) and printed to the console once submitted
//*****************************************************************************************************************

            return (
                <Container maxWidth="sm">

                    {/* Centers everything on the screen */}
                    <Box sx = {{
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                    {/* Form submit handler */}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: 400,
                            borderRadius: 2,
                            overflow: 'hidden',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: 2.5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >

                    {/* Background of/and form inputs */}
                    <Box sx={{ position: 'relative', zIndex: 2 }}>

                        {/* Form Background */}
                            <Box sx={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                zIndex: 0
                            }}
                        />

                        {/* Email input field */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        {/* Password input field */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        {/* Submit button */}
                        <Button type="submit" fullWidth variant="contained" sx={{
                                marginTop: 3,
                                marginBottom: 2,
                                backgroundColor:'#4caf50'
                            }}
                        >
                            <a href = "Customer" style={{ textDecoration: "none", color: "inherit" }}> LOGIN </a>
                        </Button>

                        {/* Footer section with link to the register page */}
                        <div style = {{
                                height: '10vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                paddingBottom: 40,
                                textAlign: 'center'
                            }}
                        >
                            <p> Don't have account? <a href = "/Register"> Register here</a> </p>
                        </div>
                        </Box>
                    </Box>
                </Box>
            </Container>
        );
    }
