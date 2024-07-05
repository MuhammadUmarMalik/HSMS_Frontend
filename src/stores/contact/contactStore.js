import { makeObservable, observable, action, runInAction } from "mobx";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../../services/apiCalls";

class ContactFormStore {
  formFields = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  errors = {};
  loading = false;

  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      loading: observable,
      setFormField: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      submitForm: action,
    });
  }

  setFormField(field, value) {
    this.formFields[field] = value;
  }

  clearFormFields() {
    this.formFields = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    };
  }

  setError(errors) {
    this.errors = errors;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  showError(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }

  showSuccess(message) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  }

  async submitForm() {
    this.setLoading(true);
    this.setError({});
    try {
      const response = await axios.post(`${baseUrl}/contact`, this.formFields);
      console.log("Response Data:", response.data);

      if (response.status === 200 || response.status === 201) {
        runInAction(() => {
          this.clearFormFields();
          this.showSuccess("Message sent successfully!");
        });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      runInAction(() => {
        if (error.response && error.response.data.errors) {
          this.setError(error.response.data.errors);
        } else {
          this.setError({ form: "Submission failed" });
        }
        this.showError("Error occurred while submitting the form.");
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const contactFormStore = new ContactFormStore();
