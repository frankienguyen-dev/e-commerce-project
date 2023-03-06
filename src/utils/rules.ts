import { RegisterOptions, UseFormGetValues } from 'react-hook-form';

type Rules = {
  [key in 'email' | 'password' | 'password_confirm']?: RegisterOptions;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài email từ 5 đến 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài email từ 5 đến 160 ký tự'
    }
  },

  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập password'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    }
  },
  password_confirm: {
    required: {
      value: true,
      message: 'Vui lòng nhập lại password'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Password không trùng khớp'
        : undefined
  }
});
