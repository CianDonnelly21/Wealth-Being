'use client';

import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '../components/Header';
import Typography from '@mui/material/Typography';



export default function DiaryPage() {

    const [entry, setEntry] = useState('');
    const [pastEntries, setPastEntries] = useState([]);

    // Fetch entries from db
    useEffect(() => {
        fetchEntries();
    }, []);

    const fetchEntries = async () => {
        try {
            const response = await fetch('/api/diary');
            const result = await response.json();
            if (result.valid) {
                setPastEntries(result.entries);
            }
        } catch (error) {
            console.log("Error fetching entries:", error);
        }
    };

    // Submit diary entry to db
    const handleSubmit = async (event) => {
        console.log("Handling Submit");
        event.preventDefault();
        if (!entry) {return;}

        const payload = {
            data: entry.trim(),
            timestamp: new Date().toISOString(), // current timestamp in ISO format (YY-MM-DDTHH:mm:ss.sssZ)
          };

        await fetch('/api/diary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
        
        // Refresh entries from database
        fetchEntries();
        
        console.log("Diary Entry Submitted: " + entry); //debug log
        setEntry('');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Daily Entry
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="How are you feeling today?"
                        multiline
                        rows={4}
                        fullWidth
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)} //updates the react state variable to keep data in sync
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit</Button>
                </form>
                
                {/* Past Entries Section */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h4" gutterBottom>
                        Past Entries
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            overflowX: 'auto',
                            pb: 2,
                            '&::-webkit-scrollbar': {
                                height: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                bgcolor: '#f1f1f1',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                bgcolor: '#888',
                                borderRadius: '4px',
                            },
                        }}
                    >
                        {pastEntries.map((pastEntry) => (
                            <Card
                                key={pastEntry._id}
                                sx={{
                                    minWidth: 200,
                                    borderRadius: '12px',
                                    border: '1px solid #ddd',
                                    boxShadow: 'none',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                                        {pastEntry.data.length > 50 ? 
                                            pastEntry.data.substring(0, 50) + '...' : 
                                            pastEntry.data}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(pastEntry.timestamp).toLocaleDateString()}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}