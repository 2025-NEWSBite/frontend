import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { BaseComponentProps } from '../../types';

interface LayoutProps extends BaseComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const location = useLocation();
  
  // 사이드바를 표시할 페이지들
  const showSidebar = ['/dashboard', '/settings'].some(path => 
    location.pathname.startsWith(path)
  );
  
  // 헤더/푸터를 숨길 페이지들 (로그인, 회원가입 등)
  const hideHeaderFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className={`min-h-screen bg-slate-50 ${className}`}>
      {!hideHeaderFooter && <Header />}
      
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}
        
        <main className={`
          flex-1 
          ${showSidebar ? 'lg:ml-64' : ''} 
          ${!hideHeaderFooter ? 'pt-16' : ''}
        `}>
          <div className="min-h-screen">
            {children}
          </div>
        </main>
      </div>
      
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;