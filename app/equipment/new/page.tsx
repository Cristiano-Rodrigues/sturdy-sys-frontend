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
          NOVO EQUIPAMENTOS
        </div>
        <div className="flex w-full h-fit bg-gray-300 rounded-lg p-3 gap-2">
          {/* Form section */}
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
