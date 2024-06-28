// signupStore.js
import { makeObservable, observable, action, runInAction, toJS } from "mobx";
import { SC } from "../../services/serverCall";
import userStore from "../users/usersStore";
import Swal from "sweetalert2";

class SignupStore {
  formFields = {
    email: "",
    name: "",
    password: "",
    face_shape: "",
  };
  errors = {
    email: "",
    name: "",
    password: "",
    face_shape: "",
    general: "",
  };
  loading = false;

  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      loading: observable,
      setFormField: action,
      setFieldError: action,
      clearFormFields: action,
      setError: action,
      setLoading: action,
      signup: action,
    });
  }

  setFormField(field, value) {
    this.formFields[field] = value;
  }

  setFieldError(field, error) {
    this.errors[field] = error;
  }

  clearFormFields() {
    this.formFields = {
      email: "",
      name: "",
      password: "",
      face_shape: "",
    };
  }

  setError(error) {
    this.errors.general = error;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  showSuccess(message) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  }
  showError(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  }
  async signup(navigate) {
    this.setLoading(true);
    try {
      const payload = toJS(this.formFields);
      const response = await SC.postCall("/user_signup", payload);
      console.log("Response Data:", response.data);

      if (response.data && response.data.data && response.data.data.token) {
        console.log("Navigating to home page");
        const { token } = response.data.data;
        localStorage.setItem(
          "userToken",
          JSON.stringify({ accessToken: token.token, role: "customer" })
        );
        runInAction(() => {
          userStore.setToken(token.token);
          userStore.setRole("customer");
        });
        navigate("/");
        this.showSuccess("Successfully customer account created");
        this.clearFormFields();
      } else {
        this.showError("Error while creating customer..");
        this.clearFormFields();
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      runInAction(() => {
        const errorMessage = error.response
          ? error.response.data.message
          : "Signup failed";
        this.setError(errorMessage);
        this.showError("Error while creating customer..");
        this.clearFormFields();
        console.log("Error Response:", error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const signUpStore = new SignupStore();
