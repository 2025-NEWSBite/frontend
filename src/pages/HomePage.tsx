import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Zap, Shield, BarChart3 } from 'lucide-react';
import Button from '../components/UI/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">개인맞춤</span>
              <span className="block text-yellow-300">뉴스 요약</span>
              <span className="block">서비스</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              매일 쏟아지는 뉴스 중에서 당신에게 꼭 필요한 뉴스만 골라
              <br className="hidden sm:block" />
              AI가 요약해서 이메일로 보내드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  무료로 시작하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary-700">
                  로그인
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
        </div>
      </section>

      {/* 기능 소개 섹션 */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              왜 뉴스한입을 선택해야 할까요?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              AI 기술과 개인화 알고리즘을 통해 당신만을 위한 뉴스 경험을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 기능 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                이메일 발송
              </h3>
              <p className="text-slate-600">
                매일 정해진 시간에 개인맞춤 뉴스 요약을 이메일로 받아보세요.
              </p>
            </div>
            
            {/* 기능 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                AI 요약
              </h3>
              <p className="text-slate-600">
                최신 AI 기술로 긴 뉴스 기사를 핵심만 간추려 요약해드립니다.
              </p>
            </div>
            
            {/* 기능 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                개인화
              </h3>
              <p className="text-slate-600">
                관심 카테고리를 설정하고 당신에게 맞는 뉴스만 받아보세요.
              </p>
            </div>
            
            {/* 기능 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                트렌드 분석
              </h3>
              <p className="text-slate-600">
                실시간 트렌드를 분석해 중요한 뉴스를 놓치지 않도록 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            지금 시작하세요
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            회원가입은 무료이며, 언제든지 설정을 변경하거나 구독을 해지할 수 있습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                무료로 시작하기
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                데모 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;