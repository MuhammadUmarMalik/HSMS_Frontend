import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Typography, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import AddBarberForm from '../../../components/barberpopup/BarberForm';
import barberStore from '../../../stores/admin/barbers/barberStore';
import { Container, CustomButton, NoBarbersContainer, Image, ModalBox, StyledPagination } from './BarberPageStyles';
import barberImage from '../../../assests/barber.png';

const BarberPage = observer(() => {
  useEffect(() => {
    const fetchBarbersData = async () => {
      try {
        await barberStore.fetchBarbers();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBarbersData();
  }, []);

  const handleOpen = () => barberStore.setOpenModal(true);
  const handleClose = () => {
    barberStore.setOpenModal(false);
    barberStore.setCurrentBarber(null);
  };

  const handleEdit = (barber) => {
    barberStore.setCurrentBarber(barber);
    handleOpen();
  };

  const handleDeleteClick = (barber) => {
    barberStore.setBarberToDelete(barber);
    barberStore.setConfirmDelete(true);
  };

  const handleConfirmDeleteClose = () => {
    barberStore.setConfirmDelete(false);
    barberStore.setBarberToDelete(null);
  };

  const handleDelete = () => {
    barberStore.deleteBarber(barberStore.barberToDelete.id);
    handleConfirmDeleteClose();
  };

  const handleChangePage = (event, value) => {
    barberStore.setPage(value);
  };

  return (
    <Container>
      <Typography variant="h4">Barbers</Typography>
      <CustomButton variant="contained" color="primary" onClick={handleOpen}>
        Add New
      </CustomButton>
      {barberStore.barbers.length === 0 ? (
        <NoBarbersContainer>
          <Image src={barberImage} alt="No barbers" />
          <Typography>No barbers at this time</Typography>
        </NoBarbersContainer>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Specialization</strong></TableCell>
                  <TableCell><strong>Password</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {barberStore.barbersToShow.map((barber) => (
                  <TableRow key={barber.id}>
                    <TableCell>{barber.name}</TableCell>
                    <TableCell>{barber.email}</TableCell>
                    <TableCell>{barber.specialization}</TableCell>
                    <TableCell>{barber.password}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(barber)}>
                        <Edit style={{ color: 'green' }} />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteClick(barber)}>
                        <Delete style={{ color: 'red' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <StyledPagination
            count={barberStore.totalPages}
            page={barberStore.page}
            onChange={handleChangePage}
          />
        </>
      )}
      <Modal open={barberStore.openModal} onClose={handleClose}>
        <ModalBox>
          <AddBarberForm onClose={handleClose} />
        </ModalBox>
      </Modal>
      <Dialog
        open={barberStore.confirmDelete}
        onClose={handleConfirmDeleteClose}
      >
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this barber?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDeleteClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
});

export default BarberPage;
