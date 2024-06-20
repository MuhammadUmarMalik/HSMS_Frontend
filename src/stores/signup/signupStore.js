// signupStore.js
import { makeObservable, observable, action, runInAction, toJS } from 'mobx';
import { SC } from '../../services/serverCall';
import userStore from '../users/usersStore';

class SignupStore {
    formFields = {
        email: '',
        name: '',
        password: '',
        face_shape: '',
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
            signup: action,
        });
    }

    setFormField(field, value) {
        this.formFields[field] = value;
    }

    clearFormFields() {
        this.formFields = {
            email: '',
            name: '',
            password: '',
            face_shape: '',
        };
    }

    setError(errors) {
        this.errors = errors;
    }

    setLoading(loading) {
        this.loading = loading;
    }

    async signup(navigate) {
        this.setLoading(true);
        try {
            const payload = toJS(this.formFields); // Extract observable values
            console.log('Request Payload:', payload);
            const response = await SC.postCall('/user_signup', payload);
            console.log('Response Data:', response.data); // Log the response data

            if (response.data && response.data.customer && response.data.token) {
                const user = response.data.customer;
                const token = response.data.token;
                localStorage.setItem('userToken', JSON.stringify({ accessToken: token.token, role: user.role }));
                runInAction(() => {
                    userStore.setUser(user);
                    userStore.setToken(token.token);
                    userStore.setRole(user.role || 'customer'); // Default role as 'customer'
                });
                console.log('Navigating to home page');
                navigate('/home');
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            runInAction(() => {
                const errorMessage = error.response ? error.response.data.message : 'Signup failed';
                this.setError(errorMessage);
                console.log('Error Response:', error.response);
            });
        } finally {
            runInAction(() => {
                this.setLoading(false);
            });
        }
    }
}

export const signUpStore = new SignupStore();
