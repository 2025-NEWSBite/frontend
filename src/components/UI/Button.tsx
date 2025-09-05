import React from 'react';
import { ButtonProps } from '../../types';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className,
  ...props
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed'
  ];

  const variantClasses = {
    primary: [
      'bg-primary-600',
      'text-white',
      'hover:bg-primary-700',
      'focus:ring-primary-500',
      'shadow-sm'
    ],
    secondary: [
      'bg-slate-100',
      'text-slate-900',
      'hover:bg-slate-200',
      'focus:ring-slate-500',
      'border',
      'border-slate-300'
    ],
    outline: [
      'border',
      'border-primary-300',
      'text-primary-700',
      'bg-transparent',
      'hover:bg-primary-50',
      'focus:ring-primary-500'
    ],
    ghost: [
      'text-slate-700',
      'bg-transparent',
      'hover:bg-slate-100',
      'focus:ring-slate-500'
    ]
  };

  const sizeClasses = {
    sm: ['px-3', 'py-1.5', 'text-sm'],
    md: ['px-4', 'py-2', 'text-base'],
    lg: ['px-6', 'py-3', 'text-lg']
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(event);
  };

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <Loader2 
          className={clsx(
            'animate-spin',
            size === 'sm' ? 'w-3 h-3' : 
            size === 'md' ? 'w-4 h-4' : 'w-5 h-5',
            children ? 'mr-2' : ''
          )}
        />
      )}
      {children}
    </button>
  );
};

export default Button;