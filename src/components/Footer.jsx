import Logo from '/logo.svg'

function Footer() {
  return (
    <div className='lg:h-64 flex flex-col'>
      <div className='md:flex-grow flex flex-col gap-4 p-2 md:flex-row lg:p-0 lg:px-1'>
        <div className='flex flex-col gap-4 flex-1'>
          <div>
            <img src={Logo} alt="" className='w-40' />
          </div>
          <p className='max-w-md text-start text-sm text-footerText'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className='md:w-40 lg:w-60 w-full flex flex-col gap-2'>
          <h1 className='text-xl'>
            COMPANY
          </h1>
          <ul className='flex flex-col gap-2 text-footerText text-sm'>
            <li>Home</li>
            <li> About us</li>
            <li> Delivery</li>
            <li> Privacy policy</li>
          </ul>
        </div>
        <div className='md:w-40 lg:w-60 w-full flex flex-col gap-2'>
          <h1 className='text-xl'>
            GET IN TOUCH
          </h1>
          <ul className='flex flex-col gap-2 text-footerText text-sm'>
            <li>9159366488</li>
            <li>ajaykumar@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='w-full border-t-[1px] border-gray-200 text-sm py-5 flex justify-center'>
        <p>
          Copyright 2024 @ Ajaykumar N - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer