import { makeObservable, observable, action, runInAction } from 'mobx';
import { SC } from '../../services/serverCall';
import userStore from '../users/usersStore';

class LoginStore {
    formFields = {
        email: '',
        password: '',
    };
    errors = '';
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
            login: action,
        });
    }

    setFormField(field, value) {
        this.formFields[field] = value;
    }

    clearFormFields() {
        this.formFields = {
            email: '',
            password: '',
        };
    }

    setError(errors) {
        this.errors = errors;
    }

    setLoading(loading) {
        this.loading = loading;
    }

    async login(navigate) {
      this.setLoading(true);
      try {
          const response = await SC.postCall('/user_login', this.formFields);
          console.log('Response Data:', response.data);
          if (response.data && response.data.data && response.data.data.user && response.data.data.token) {
              const { user, token } = response.data.data;
              localStorage.setItem('userToken', JSON.stringify({ accessToken: token, role: user.role }));
              runInAction(() => {
                  userStore.setUser(user);
                  userStore.setToken(token);
                  userStore.setRole(user.role);
              });
              navigate('/home');
          } else {
              throw new Error('Invalid response from server');
          }
      } catch (error) {
          runInAction(() => {
              this.setError(error.response ? error.response.data.message : 'Login failed');
              console.log(error);
          });
      } finally {
          runInAction(() => {
              this.setLoading(false);
          });
      }
  }
  
}

export const loginStore = new LoginStore();
