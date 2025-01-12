import { FaSpinner } from 'react-icons/fa';
import './Spinner.css';
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <FaSpinner className="spinner-icon" />
    </div>
  )
}
