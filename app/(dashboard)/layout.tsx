import { Sidebar } from '@/app/components/local/Sidebar'

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen p-2 gap-2">
      <Sidebar />
      <div className="flex flex-col h-full max-h-full overflow-y-auto w-[calc(100%-225px)]">
        {children}
      </div>
    </div>
  )
}
