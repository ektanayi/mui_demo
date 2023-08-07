import { useState } from "react";
import Box from '@mui/material/Box';
import './Home.css';
import Paper from '@mui/material/Paper';
import UpdateIcon from '@mui/icons-material/Update';
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from
    "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from
    "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import MovingIcon from '@mui/icons-material/Moving';



export default function Collaps2() {
    const [open, setOpen] = useState(false);
    return (


        <Card sx={{

            border: "1px solid rgba(211,211,211,0.6)",
        }}>
            <CardHeader className="collaps2"

                action={
                    <IconButton
                        onClick={() => setOpen(!open)}
                        aria-label="expand"
                        size="small"
                        
                    >

<Box 
   sx={{
     display: 'flex',
     justifyContent: 'space-between',
     flexWrap: 'wrap',
     '& > :not(style)': {
     m: 1,
     p:1,
     height: 'auto',
     width: 'auto',
     OverflowX: "scroll",
     },
   }}
 >
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>Rajwade and Sons</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>Zensar</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>Cybage</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>Thoughtworks</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>PWC</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>Deliotte</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>IOCL</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>ONGC</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>PWC</Paper>
   <Paper elevation={3} className="paper"><MovingIcon fontSize="small" className="iconpd"/>Deliotte</Paper>

</Box>
                        {open ? <KeyboardArrowUpIcon />
                            : <KeyboardArrowDownIcon />}
                    </IconButton>




                }
            >

            </CardHeader>
            <div style={{
                backgroundColor: "rgba(211,211,211,0.4)"
            }}>
                <Collapse in={open} timeout="auto"
                    unmountOnExit>
                    <CardContent>
                        <Container sx={{
                            height: 100,
                            lineHeight: 2
                        }}>
                            An interview-centric course
                            designed to prepare you for
                            the role of SDE for both
                            product and service-based
                            companies. A placement
                            preparation pack built with
                            years of expertise. Learn
                            Resume Building, C++, Java,
                            DSA, CS Theory concepts,
                            Aptitude, Reasoning, LLD,
                            and much more!
                        </Container>
                    </CardContent>
                </Collapse>
            </div>
        </Card>


    );
}