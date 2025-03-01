import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Login user
  const login = (userData) => {
    // Get the password from the login attempt
    const password = userData.password;
    
    // Get registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Find the user in registered users
    const foundUser = registeredUsers.find(user => user.email === userData.email);
    
    // If user is found and password matches
    if (foundUser && foundUser.password === password) {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return { success: true };
    }
    
    return { 
      success: false, 
      error: foundUser ? 'Incorrect password' : 'No account found with this email'
    };
  };

  // Register user
  const register = (userData) => {
    // Get existing registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if email already exists
    const userExists = registeredUsers.some(user => user.email === userData.email);
    
    if (userExists) {
      return { 
        success: false, 
        error: 'An account with this email already exists' 
      };
    }
    
    // Add user to registered users
    registeredUsers.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    // Also log the user in
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    
    return { success: true };
  };

  // Logout user
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  // Check if user exists (for checking during signup)
  const userExists = (email) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    return registeredUsers.some(user => user.email === email);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        login,
        register,
        logout,
        userExists
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};