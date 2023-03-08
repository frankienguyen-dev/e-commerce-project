import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from 'src/components/Input';
import { getRules } from 'src/utils/rules';

interface formData {
  email: string;
  password: string;
  password_confirm: string;
}

export default function Register() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors }
  } = useForm<formData>();

  const rules = getRules(getValues);

  const onSubmit = handleSubmit(
    (data) => {
      // console.log('check data: ', data);
    },
    (data) => {
      const password = getValues('password');
      console.log(password);
    }
  );

  return (
    <div className='bg-orange'>
      <div className='container '>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-20 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-[30px] shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-[1.25rem]'>Đăng ký</div>
              <Input
                className='mt-8'
                type='email'
                placeholder='Email'
                name='email'
                register={register}
                errorMessage={errors.email?.message}
                rules={rules.email}
                autoComplete='on'
              />

              <Input
                className='mt-2'
                type='password'
                placeholder='Password'
                name='password'
                register={register}
                errorMessage={errors.password?.message}
                rules={rules.password}
                autoComplete='on'
              />

              <Input
                className='mt-2'
                type='password'
                placeholder='Confirm Password'
                name='password_confirm'
                register={register}
                errorMessage={errors.password_confirm?.message}
                rules={rules.password_confirm}
                autoComplete='on'
              />

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
