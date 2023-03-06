import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { rules } from 'src/utils/rules';

interface formData {
  email: string;
  password: string;
  password_confirm: string;
}

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<formData>();

  console.log('check error: ', errors);
  const onSubmit = handleSubmit((data) => {
    // console.log('check data: ', data);
  });

  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-[1200px] px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-20 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-[30px] shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-[1.25rem]'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  {...register('email', rules.email)}
                  className='w-full rounded-sm border-[1px] border-gray-300 p-3 outline-none 
                  focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>
                  {errors.email?.message}
                </div>
              </div>

              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  {...register('password', rules.password)}
                  className='w-full rounded-sm border-[1px] border-gray-300 p-3 outline-none 
                  focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>
                  {' '}
                  {errors.password?.message}
                </div>
              </div>

              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  {...register('password_confirm', rules.password_confirm)}
                  className='w-full rounded-sm border-[1px] border-gray-300 p-3 outline-none 
                  focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>
                  {' '}
                  {errors.password_confirm?.message}
                </div>
              </div>

              <div className='mt-2'>
                <button className='w-full rounded-sm bg-orange py-4 px-2 text-center text-white'>
                  Đăng ký
                </button>
              </div>

              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className=' text-black/[0.26]'>Bạn đã có tài khoản?</span>
                  <Link to='/login'>
                    <span className='pl-1 text-orange hover:cursor-pointer'>Đăng nhập</span>
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
