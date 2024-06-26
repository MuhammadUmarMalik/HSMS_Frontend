// src/stores/AppointmentStore.js
import axios from "axios";
import { makeObservable, observable, action, runInAction } from "mobx";
import Swal from "sweetalert2";
import { baseUrl } from "../../services/apiCalls";
import { SC } from "../../services/serverCall";

class AppointmentStore {
  formFields = {
    date: "",
    time: "",
    barber_id: "",

  };
  errors = "";
  loading = false;
  barbers = [];
  constructor() {
    makeObservable(this, {
      formFields: observable,
      errors: observable,
      setFormField: action,
      clearFormFields: action,
      setError: action,
    });
  }

  setLoading(loading) {
    this.loading = loading;
  }

  showError(message) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: message,
    });
  }
  async fetchBarbers() {
    this.setLoading(true);
    try {
      const response = await SC.getCall("/all_barbers");
      console.log("helllllllllllo", response.data.data);
      this.barbers = response.data.data;
    } catch (error) {
      runInAction(() => {
        this.error = error.message || "Failed to fetch barbers";
        console.error(this.error);
      });
    } finally {
      this.setLoading(false);
      console.log("usmanaaa", this.barbers);
    }
  }

  async handleSubmit(navigate) {
    this.setLoading(true);
    console.log("ooye", this.formFields);
    try {
      const userTokenString = localStorage.getItem("userToken");
      const userToken = JSON.parse(userTokenString);
      const token = userToken.accessToken.token;

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const barber_id = this.formFields.barber_id;
      const time = this.formFields.time;
      const date = this.formFields.date;

      // Function to reformat date from YYYY-MM-DD to DD-MM-YYYY
      const formatDate = (date) => {
        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
      };

      const formattedDate = formatDate(date);

      const formData = {
        barber_id: barber_id,
        time: time,
        date: formattedDate,
      };

      console.log("oyeeeeeeeeeee", barber_id, time, formattedDate);

      const response = await SC.postCall("/appointments", formData);

      //   const response = await axios.post(
      //     `${baseUrl}/appointments`,
      //     barber_id,
      //     time,
      //     date,
      //     {
      //       headers,
      //     }
      //   );
      console.log("Response Data:", response.data);
      if (response.data.status === 200) {
        console.log("usman", response.data);
        navigate("../customer/home");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      runInAction(() => {
        this.setError(
          error.response ? error.response.data.message : "Login failed"
        );
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  setFormField(field, value) {
    this.formFields[field] = value;
    console.log("usman");
    console.log(field, value);
  }

  clearFormFields() {
    this.formFields = {
      date: "",
      time: "",
      branch: "",
    };
  }

  setError(errors) {
    this.errors = errors;
  }
}

const appointmentStore = new AppointmentStore();
export default appointmentStore;
