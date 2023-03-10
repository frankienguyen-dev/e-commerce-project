import { RegisterOptions, UseFormGetValues } from 'react-hook-form';
import * as yup from 'yup';

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

export const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không đúng định dạng')
    .max(150, 'Độ dài email từ 5 đến 160 ký tự')
    .min(5, 'Độ dài email từ 5 đến 160 ký tự'),
  password: yup
    .string()
    .required('Vui lòng nhập password')
    .max(160, 'Độ dài password từ 6 đến 160 ký tự')
    .min(6, 'Độ dài password từ 6 đến 160 ký tự'),
  password_confirm: yup
    .string()
    .required('Vui lòng nhập lại password')
    .max(150, 'Độ dài email từ 5 đến 160 ký tự')
    .min(5, 'Độ dài email từ 5 đến 160 ký tự')
    .oneOf([yup.ref('password')], 'Password không trùng khớp')
});

export type Schema = yup.InferType<typeof schema>;
