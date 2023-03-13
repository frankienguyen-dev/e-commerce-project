import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginAccount } from 'src/apis/auth.api';
import Input from 'src/components/Input';
import { ResponseApi } from 'src/types/utils.type';
import { Schema, schema } from 'src/utils/rules';
import { axiosUnprocessableEntityError } from 'src/utils/utils';

type formData = Omit<Schema, 'password_confirm'>;
const loginSchema = schema.omit(['password_confirm']);

export default function Login() {
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    watch,
    formState: { errors }
  } = useForm<formData>({
    resolver: yupResolver(loginSchema)
  });

  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<formData, 'password_confirm'>) => loginAccount(body)
  });

  const onSubmit = handleSubmit((data) => {
    console.log('check data login: ', data);
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log('check data when success: ', data);
      },

      onError: (error) => {
        if (axiosUnprocessableEntityError<ResponseApi<formData>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof formData, {
                message: formError[key as keyof formData],
                type: 'Server'
              });
            });
          }
        }
      }
    });
  });

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-20 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-[30px] shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-[1.25rem]'>Đăng nhập</div>
              <Input
                className='mt-8'
                type='email'
                placeholder='Email'
                name='email'
                register={register}
                errorMessage={errors.email?.message}
                autoComplete='on'
              />

              <Input
                className='mt-2'
                type='password'
                placeholder='Password'
                name='password'
                register={register}
                errorMessage={errors.password?.message}
                autoComplete='on'
              />

              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full rounded-sm bg-orange py-4 px-2 text-center text-white'
                >
                  Đăng nhập
                </button>
              </div>

              <div className='mt-8  text-center '>
                <div className='flex items-center justify-center '>
                  <span className=' text-black/[0.26]'>Bạn mới biết đến Shopee?</span>
                  <Link to='/register'>
                    <span className='pl-1 text-orange hover:cursor-pointer'>Đăng ký</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
