import * as React from 'react';
import { ToastContainer } from 'react-toastify';

export const Toast = ({ isError = false }) => {
	return <ToastContainer position="bottom-center" role="error" />;
};
