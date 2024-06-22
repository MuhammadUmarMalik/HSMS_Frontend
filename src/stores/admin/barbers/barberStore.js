import { makeAutoObservable, runInAction } from 'mobx';
import { SC } from '../../../services/serverCall'; 

class BarberStore {
  barbers = [];
  openModal = false;
  currentBarber = null;
  barberToDelete = null;
  page = 1;
  itemsPerPage = 5;
  confirmDelete = false;
  formFields = {
    name: '',
    email: '',
    specialization: '',
    password: '',
    role:'barber',
  };
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBarbers() {
    this.setLoading(true);
    try {
      const response = await SC.getCall('/barbers');
      runInAction(() => {
        this.barbers = Array.isArray(response.data) ? response.data : [];
        console.log('Fetched and stored barbers:', this.barbers);
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message || 'Failed to fetch barbers';
        console.error(this.error);
      });
    } finally {
      this.setLoading(false);
    }
  }


  async addBarber(barber) {
    try {
      const response = await SC.postCall('/barbers', barber);
      runInAction(() => {
        this.barbers.push(response.data);
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message || 'Failed to add barber';
      });
      throw error;
    }
  }

  async updateBarber(id, updatedBarber) {
    try {
      const response = await SC.putCall(`/barbers/${id}`, updatedBarber);
      runInAction(() => {
        const index = this.barbers.findIndex((barber) => barber.id === id);
        if (index !== -1) {
          this.barbers[index] = { ...this.barbers[index], ...response.data };
        }
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message || 'Failed to update barber';
      });
      throw error;
    }
  }

  async deleteBarber(id) {
    try {
      await SC.deleteCall(`/barbers/${id}`);
      runInAction(() => {
        this.barbers = this.barbers.filter(barber => barber.id !== id);
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message || 'Failed to delete barber';
      });
      throw error;
    }
  }

  setOpenModal(open) {
    this.openModal = open;
  }

  setCurrentBarber(barber) {
    this.currentBarber = barber;
    if (barber) {
      this.setFormFields(barber);
    } else {
      this.resetFormFields();
    }
  }

  setBarberToDelete(barber) {
    this.barberToDelete = barber;
  }

  setPage(page) {
    this.page = page;
  }

  setConfirmDelete(confirm) {
    this.confirmDelete = confirm;
  }

  setFormField(name, value) {
    this.formFields[name] = value;
  }

  setFormFields(fields) {
    this.formFields = { ...fields };
  }

  resetFormFields() {
    this.formFields = {
      name: '',
      email: '',
      specialization: '',
      password: '',
      role:'barber'
    };
  }

  setLoading(loading) {
    this.loading = loading;
  }

  get barbersToShow() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.barbers.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.barbers.length / this.itemsPerPage);
  }
}

const barberStore = new BarberStore();
export default barberStore;
