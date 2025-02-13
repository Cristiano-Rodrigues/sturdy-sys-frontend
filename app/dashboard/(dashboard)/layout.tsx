import { Sidebar } from '@/app/components/user/Sidebar'

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen p-2 gap-2">
      <Sidebar />
      <div className="flex flex-col h-full w-[calc(100%-225px)]">
        {children}
      </div>
    </div>
  )
}
