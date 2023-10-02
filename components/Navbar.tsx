'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { links } from '../constants'

const Navbar = () => {
  const pathname = usePathname();
  const list = links.filter( link => link.path != pathname).map( link => <Link className='text-lg' key={link.title} href={link.path}  >{link.title}</Link>)

  return (
    <div className='flex justify-between px-5 py-4 border-b'>
      <h2 className='font-bold text-green-500 text-xl  border-b-4 border-b-green-500'>{links.filter( link => link.path === pathname)[0].title}</h2>
      <ul className='flex gap-12'>{list}</ul>
    </div>
  )
}

export default Navbar
