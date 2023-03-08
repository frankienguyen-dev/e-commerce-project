import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log('check data: ', data);
  });

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-20 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-[30px] shadow-sm' onSubmit={onSubmit}>
              <div className='text-[1.25rem]'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full rounded-sm border-[1px] border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>

              <div className='mt-3'>
                <input
                  type='password'
                  autoComplete='on'
                  name='password'
                  className='w-full rounded-sm border-[1px] border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>

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
