// signupValidations.js
import { signUpStore } from '../stores/signup/signupStore';

export const validateSignupForm = () => {
  const { email, name, password, face_shape } = signUpStore.formFields;

  if (!email || !name || !password || !face_shape) {
    signUpStore.setError('Please fill in all fields');
    return false;
  }

  if (!isValidEmail(email)) {
    signUpStore.setError('Please enter a valid email');
    return false;
  }

  if (!isValidUsername(name)) {
    signUpStore.setError('The name should contain only characters and spaces');
    return false;
  }

  if (!isValidPassword(password)) {
    signUpStore.setError('Password must be at least 6 characters long');
    return false;
  }

  if (!isValidFaceShape(face_shape)) {
    signUpStore.setError('Please select a valid face shape');
    return false;
  }

  signUpStore.setError('');
  return true;
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  return password.length >= 6;
};

const isValidUsername = (name) => {
  const validCharactersRegex = /^[a-zA-Z\s]+$/;
  return validCharactersRegex.test(name);
};

const isValidFaceShape = (faceShape) => {
  const validFaceShapes = ['round', 'oval', 'square', 'heart', 'diamond'];
  return validFaceShapes.includes(faceShape.toLowerCase());
};
