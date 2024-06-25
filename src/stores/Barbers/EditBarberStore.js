import { makeObservable, observable, action, runInAction, toJS } from "mobx";
import { SC } from "../../services/serverCall";
class EditBarberStore {
  //   selectedDate = new Date();
  selectedDate = null;
  openModal = false;

  formFields = {
    name: "",
    email: "",
    password: "",
    starthours: "",
    endhours: "",
  };
  errors = "";
  loading = false;

  constructor() {
    makeObservable(this, {
      openModal: observable,
      formFields: observable,
      errors: observable,
      loading: observable,
      setOpenModal: action,
      setFormField: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      FetchBarber: action,
      setSelectedDate: action,
    });
  }
  setOpenModal(open) {
    this.openModal = open;
  }
  setSelectedDate(date) {
    this.selectedDate = date;
  }
  setFormField(field, value) {
    this.formFields[field] = value;
    console.log(field, value);
  }

  clearFormFields() {
    this.formFields = {
      email: "",
      name: "",
      password: "",
      face_shape: "",
    };
  }

  setError(errors) {
    this.errors = errors;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  async FetchBarber() {
    this.setLoading(true);
    try {
      const payload = toJS(this.formFields);
      // console.log('Request Payload:', payload);
      const response = await SC.postCall("/user_signup", payload);
      console.log("Response Data:", response.data);
    } catch (error) {
      runInAction(() => {
        const errorMessage = error.response
          ? error.response.data.message
          : "Signup failed";
        this.setError(errorMessage);
        console.log("Error Response:", error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const editBarberStore = new EditBarberStore();
