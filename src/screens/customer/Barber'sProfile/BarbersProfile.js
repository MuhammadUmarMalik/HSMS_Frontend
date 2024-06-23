import React from 'react'
import {
    Container,
} from "./BarbersProfilePageStyles";
import AdminHeader from "../../../components/headers/admin/Header";
import { Typography } from '@mui/material';

const BarbersProfile = () => {
    return (
        <>
            <Container>
                <AdminHeader />
                <Typography variant="h4">Barber's Profile</Typography>

            </Container>
        </>
    )
}

export default BarbersProfile