
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './router/AppRoutes';
import { NotificationToast, useNotification } from './components/common/NotificationToast';

// Global Notification Provider (Conceptual - real one might be more complex)
// For this app, we'll instantiate useNotification in components that need to show notifications.
// A more robust solution might use a context for notifications.

function App() {
  // const { ToastComponent } = useNotification(); // If notifications were truly global via context

  return (
    <AuthProvider>
      <HashRouter>
        <AppRoutes />
        {/* {ToastComponent} This would render global toasts if managed by a context above AppRoutes */}
      </HashRouter>
    </AuthProvider>
  );
}

export default App;