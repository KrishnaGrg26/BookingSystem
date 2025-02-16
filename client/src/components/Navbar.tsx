import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image';

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const isAdmin = user?.email === process.env.ADMIN_EMAIL

    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        <Image src="/logo.png" alt="FlyHigh Logo" width={100} height={80} />
                    </Link>

                    <div className='h-full flex items-center space-x-4'>
                        {user ? (
                            <>
                                <Link
                                    href='/destination'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    Destinations
                                </Link>
                                <Link
                                    href='/feedback'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    FeedBacks
                                </Link>
                                <Link
                                    href='/api/auth/logout'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    Sign out
                                </Link>
                                {isAdmin ? (
                                    <Link
                                        href='/dashboard'
                                        className={buttonVariants({
                                            size: 'sm',
                                            variant: 'ghost',
                                        })}>
                                        Dashboard ✨
                                    </Link>


                                ) : null}

                                <Link
                                    href='/personalDetail'
                                    className={buttonVariants({
                                        size: 'sm',
                                        className: 'hidden sm:flex items-center gap-1',
                                    })}>
                                    Book a Flight
                                    <ArrowRight className='ml-1.5 h-5 w-5' />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/api/auth/register'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    Sign up
                                </Link>

                                <Link
                                    href='/api/auth/login'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    Login
                                </Link>
                                <Link
                                    href='/destination'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    Destinations
                                </Link>
                                <Link
                                    href='/feedback'
                                    className={buttonVariants({
                                        size: 'sm',
                                        variant: 'ghost',
                                    })}>
                                    FeedBacks
                                </Link>

                                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                                <Link
                                    href='/personalDetail'
                                    className={buttonVariants({
                                        size: 'sm',
                                        className: 'hidden sm:flex items-center gap-1',
                                    })}>
                                    Book a Flight
                                    <ArrowRight className='ml-1.5 h-5 w-5' />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar