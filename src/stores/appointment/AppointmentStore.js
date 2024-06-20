// src/stores/AppointmentStore.js
import { makeObservable, observable, action } from 'mobx';

class AppointmentStore {
    formFields = {
        date: '',
        time: '',
        branch: '',
    };
    errors = '';

    constructor() {
        makeObservable(this, {
            formFields: observable,
            errors: observable,
            setFormField: action,
            clearFormFields: action,
            setError: action,
        });
    }

    setFormField(field, value) {
        this.formFields[field] = value;
    }

    clearFormFields() {
        this.formFields = {
            date: '',
            time: '',
            branch: '',
        };
    }

    setError(errors) {
        this.errors = errors;
    }
}

const appointmentStore = new AppointmentStore();
export default appointmentStore;
