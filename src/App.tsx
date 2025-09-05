import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// 페이지 컴포넌트들
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

// 레이아웃 컴포넌트들
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/Auth/PrivateRoute';

// 전역 상태 및 컨텍스트
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

// React Query 클라이언트 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5분
      cacheTime: 10 * 60 * 1000, // 10분
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NotificationProvider>
          <Router>
            <div className="App">
              <Layout>
                <Routes>
                  {/* 공개 페이지 */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  
                  {/* 인증이 필요한 페이지 */}
                  <Route 
                    path="/dashboard" 
                    element={
                      <PrivateRoute>
                        <DashboardPage />
                      </PrivateRoute>
                    } 
                  />
                  <Route 
                    path="/settings" 
                    element={
                      <PrivateRoute>
                        <SettingsPage />
                      </PrivateRoute>
                    } 
                  />
                  
                  {/* 404 페이지 */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            </div>
          </Router>
        </NotificationProvider>
      </AuthProvider>
      
      {/* 개발 환경에서만 React Query DevTools 표시 */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default App;