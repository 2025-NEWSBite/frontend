import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Settings, Menu } from 'lucide-react';
import Button from '../UI/Button';
import { useAuth } from '../../hooks/useAuth';
import clsx from 'clsx';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold text-primary-600 hover:text-primary-700"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">뉴</span>
              </div>
              <span>뉴스한입</span>
            </Link>
          </div>

          {/* 네비게이션 (데스크톱) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/dashboard" 
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              대시보드
            </Link>
            <Link 
              to="/news" 
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              뉴스
            </Link>
            <Link 
              to="/categories" 
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              카테고리
            </Link>
          </nav>

          {/* 우측 액션 버튼들 */}
          <div className="flex items-center space-x-4">
            {user ? (
              // 로그인된 사용자
              <div className="flex items-center space-x-3">
                {/* 알림 버튼 */}
                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="sr-only">알림</span>
                </button>

                {/* 사용자 메뉴 */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                    {user.profile_image ? (
                      <img 
                        src={user.profile_image} 
                        alt={user.full_name}
                        className="w-6 h-6 rounded-full"
                      />
                    ) : (
                      <User className="w-5 h-5 text-slate-400" />
                    )}
                    <span className="text-sm font-medium text-slate-700">
                      {user.full_name}
                    </span>
                  </button>

                  {/* 드롭다운 메뉴 */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        설정
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        로그아웃
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // 로그인되지 않은 사용자
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    로그인
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    회원가입
                  </Button>
                </Link>
              </div>
            )}

            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Menu className="w-6 h-6" />
              <span className="sr-only">메뉴</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;