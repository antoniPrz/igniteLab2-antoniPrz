import { Logo } from './Logo';

export function Header() {
  return (
    <>
      <header className='w-full flex py-5 justify-center items-center bg-gray-700 border-b border-gray-600'>
        <Logo />
      </header>
    </>
  );
}
