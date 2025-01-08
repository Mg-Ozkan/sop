import { FaSpinner } from 'react-icons/fa';
import './Spinner.css';

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <FaSpinner className="spinner-icon" />
    </div>
  )
}
