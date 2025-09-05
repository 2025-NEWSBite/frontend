import React, { forwardRef } from 'react';
import { InputProps } from '../../types';
import clsx from 'clsx';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  name,
  label,
  placeholder,
  type = 'text',
  value,
  defaultValue,
  error,
  disabled = false,
  required = false,
  className,
  onChange,
  onBlur,
  ...props
}, ref) => {
  const inputClasses = clsx(
    // 기본 스타일
    'w-full',
    'px-3',
    'py-2',
    'border',
    'rounded-lg',
    'text-sm',
    'transition-colors',
    'duration-200',
    'placeholder:text-slate-400',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-1',
    
    // 상태별 스타일
    error ? [
      'border-red-300',
      'text-red-900',
      'focus:border-red-500',
      'focus:ring-red-500'
    ] : [
      'border-slate-300',
      'text-slate-900',
      'focus:border-primary-500',
      'focus:ring-primary-500'
    ],
    
    // disabled 상태
    disabled && [
      'bg-slate-50',
      'text-slate-500',
      'cursor-not-allowed'
    ],
    
    className
  );

  const labelClasses = clsx(
    'block',
    'text-sm',
    'font-medium',
    'mb-1',
    error ? 'text-red-700' : 'text-slate-700',
    required && "after:content-['*'] after:text-red-500 after:ml-1"
  );

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className={labelClasses}>
          {label}
        </label>
      )}
      
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;