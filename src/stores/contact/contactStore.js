import { makeAutoObservable } from "mobx";
import axios from "axios";

class ContactFormStore {
  formFields = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  errors = {};
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setFormField(field, value) {
    this.formFields[field] = value;
  }

  async submitForm() {
    this.loading = true;
    this.errors = {};

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/contact", this.formFields);

      if (response.status === 200) {
        // Handle successful form submission
        alert("Message sent successfully!");
      } else {
        // Handle server-side validation errors
        this.errors = response.data.errors;
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        // Handle server-side validation errors
        this.errors = error.response.data.errors;
      } else {
        // Handle other errors (e.g., network errors)
        alert("An error occurred. Please try again later.");
      }
    } finally {
      this.loading = false;
    }
  }
}

export const contactFormStore = new ContactFormStore();
