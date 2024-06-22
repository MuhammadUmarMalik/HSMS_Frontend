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
            const payload = toJS(this.formFields); 
            // console.log('Request Payload:', payload);
            const response = await SC.postCall('/user_signup', payload);
            console.log('Response Data:', response.data);

            if (response.data && response.data.data && response.data.data.token) {
                console.log('Navigating to home page');
                const { token } = response.data.data;
                localStorage.setItem('userToken', JSON.stringify({ accessToken: token.token, role: 'customer' }));
                runInAction(() => {
                    userStore.setToken(token.token);
                    userStore.setRole('customer'); 
                });
                navigate('/home');
            } else {
                throw new Error('error');
            }
        } catch (error) {
            runInAction(() => {
                const errorMessage = error.response ? error.response.data.message : 'Signup failed';
                this.setError(errorMessage);
                console.log('Error Response:', error);
            });
        } finally {
            runInAction(() => {
                this.setLoading(false);
            });
        }
    }
}

export const signUpStore = new SignupStore();
