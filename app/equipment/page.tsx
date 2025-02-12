import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-screen p-2 gap-2">
      <div className="flex flex-col w-[225px] h-full bg-gray-400 rounded-lg p-2 gap-2">
        {/* Sidebar */}
        <div className="w-full h-[50px] bg-gray-600 rounded-lg">
          {/* To place the logo */}
        </div>
        <div className="w-full h-[calc(100%-50px)] bg-slate-300 rounded-lg">
          {/* To place the menu */}
        </div>
      </div>
      <div className="flex flex-col w-[calc(100%-225px)] gap-2">
        <div className="flex items-center w-full h-[70px] bg-gray-300 rounded-lg p-2">
          {/* Header */}
          EQUIPAMENTOS
        </div>
        <div className="flex w-full h-[70px] bg-gray-300 rounded-lg p-3 gap-2">
          {/* Tools section */}
          <input type="text" placeholder="Pesquise aqui..." className="rounded-lg p-2 w-[400px] outline-none" />
          <Link href={'/equipment/new'} className="flex justify-center items-center px-2 py-1 bg-blue-600 text-white rounded-lg">
            Novo
          </Link>
        </div>
        <div className="flex w-full h-full rounded-lg gap-2">
          {/* List of itens */}
          <div className="w-[calc(100%-275px)] h-full bg-gray-400 rounded-lg">
            {/* Table of contents */}
          </div>
          <div className="w-[275px] h-full bg-slate-500 rounded-lg">
            {/* Details panel */}
          </div>
        </div>
      </div>
    </div>
  );
}
