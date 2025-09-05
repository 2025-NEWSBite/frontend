// 공통 타입 정의

// API 응답 공통 타입
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  timestamp: string;
}

// 에러 응답 타입
export interface ErrorDetail {
  code: string;
  message: string;
  field?: string;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: ErrorDetail[];
  timestamp: string;
}

// 페이지네이션 타입
export interface PaginationMeta {
  page: number;
  size: number;
  total: number;
  pages: number;
  has_next: boolean;
  has_prev: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

// 사용자 관련 타입
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  PREMIUM = 'premium'
}

export enum EmailFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',  
  MONTHLY = 'monthly',
  DISABLED = 'disabled'
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  is_active: boolean;
  is_verified: boolean;
  role: UserRole;
  profile_image?: string;
  bio?: string;
  email_frequency: EmailFrequency;
  email_time_hour: number;
  google_id?: string;
  created_at: string;
  updated_at: string;
}

export interface UserPreference {
  id: string;
  user_id: string;
  preferred_categories?: string[];
  summary_length: 'short' | 'medium' | 'long';
  language: string;
  push_notification: boolean;
  email_notification: boolean;
  created_at: string;
  updated_at: string;
}

// 뉴스 관련 타입
export enum NewsCategory {
  POLITICS = 'politics',
  ECONOMY = 'economy',
  SOCIETY = 'society',
  CULTURE = 'culture',
  INTERNATIONAL = 'international',
  SPORTS = 'sports',
  ENTERTAINMENT = 'entertainment',
  IT = 'it',
  HEALTH = 'health',
  EDUCATION = 'education'
}

export enum SentimentType {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  NEUTRAL = 'neutral'
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  summary?: string;
  url: string;
  source: string;
  author?: string;
  category: NewsCategory;
  tags?: string[];
  published_at: string;
  crawled_at: string;
  status: string;
  sentiment?: SentimentType;
  sentiment_score?: number;
  importance_score: number;
  view_count: number;
  share_count: number;
  thumbnail_url?: string;
  created_at: string;
  updated_at: string;
}

export interface NewsSummary {
  id: string;
  article_id: string;
  title: string;
  content: string;
  key_points?: string[];
  summary_type: 'short' | 'medium' | 'long';
  model_name?: string;
  model_version?: string;
  confidence_score?: number;
  language: string;
  created_at: string;
  updated_at: string;
}

// 인증 관련 타입
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  full_name: string;
  confirm_password: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

// 폼 상태 타입
export interface FormState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

// 컴포넌트 Props 타입들
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// 알림 타입
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// 설정 관련 타입
export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
}

// 통계 타입
export interface DashboardStats {
  total_articles: number;
  total_summaries: number;
  weekly_growth: number;
  category_distribution: Record<NewsCategory, number>;
  recent_activity: {
    date: string;
    count: number;
  }[];
}