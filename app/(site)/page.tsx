import Image from 'next/image'
import {FC} from 'react'
import AuthForm from './components/authForm'

interface PageProps {}

const Home: FC<PageProps> = ({}) => {
   return (
      <div className='flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-gray-100'>
         <div className='sm:mx-auto sm:w-full sm:max-w-screen-md'>
            <Image
               alt='logo'
               height='55'
               width='55'
               src='/images/logo.png'
               className='mx-auto w-auto' />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize'>
               Sign in to your account
            </h2>
         </div>
         <AuthForm />
      </div>
   )
}

export default Home