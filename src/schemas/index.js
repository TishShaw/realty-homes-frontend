import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const registerValidationSchema = yup.object().shape({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'Please create a stronger password' })
		.required('Required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password must match')
		.required('Required'),
});

export const loginValidationSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup.string().required('Required'),
});
