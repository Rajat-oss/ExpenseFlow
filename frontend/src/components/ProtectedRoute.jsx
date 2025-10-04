import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  
  if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    return <Navigate to="/expenses" replace />;
  }

  return children;
};

export default ProtectedRoute;