import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { getUser } from './_actions/auth'

async function page() {
  const userInformation = (await getUser()).user
  const isAuth = (await getUser()).isAuthenticated

  if (isAuth) {
    if (userInformation?.role === 'TEACHER') {
      redirect('/admin/account')
    } else if (userInformation?.role === 'SELLER') {
      redirect('/clerk/account')
    } else {
      // redirect("/");
    }
  }
  return (
    <div className="flex flex-wrap gap-5 items-center mt-10 justify-center ">
      <div className="flex flex-col gap-5 border p-4 items-center justify-center">
        <div className="bg-slate-200 aspect-square h-60" />
        <Link
          className={cn(buttonVariants({ variant: 'outline' }))}
          href="/auth/admin/login"
        >
          LOGIN AS ADMIN
        </Link>
      </div>

      <div className="flex flex-col gap-5 border p-4 items-center justify-center">
        <div className="bg-slate-200 aspect-square h-60" />
        <Link
          className={cn(buttonVariants({ variant: 'outline' }))}
          href="/auth/clerk/login"
        >
          LOGIN AS CLERK
        </Link>
      </div>
    </div>
  )
}

export default page
