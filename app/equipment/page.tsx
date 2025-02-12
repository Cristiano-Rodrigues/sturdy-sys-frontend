import { Input, Button, Text, Theme } from "@chakra-ui/react"
import { Table } from "@/components/local/Table"
import Link from "next/link"

export default function Home() {
  return (
    <Theme appearance="light">
      <div className="flex w-full h-screen p-2 gap-2">
        <div className="flex flex-col w-[225px] h-full bg-lightGray rounded-lg p-2 gap-2">
          {/* Sidebar */}
          <div className="w-full h-[50px] rounded-lg">
            {/* To place the logo */}
          </div>
          <div className="w-full h-[calc(100%-50px)] rounded-lg">
            {/* To place the menu */}
          </div>
        </div>
        <div className="flex flex-col w-[calc(100%-225px)] gap-2">
          <div className="flex items-center w-full h-[70px] bg-lightGray rounded-lg p-2">
            {/* Header */}
            <Text fontWeight="light">Equipamentos</Text>
          </div>
          <div className="flex w-full h-[70px] bg-lightGray rounded-lg p-3 gap-2 justify-between">
            {/* Tools section */}
            <Input placeholder="Pesquise aqui" size="sm" className="p-2 w-[400px] bg-white" />
            <div className="flex gap-2">
              <Button className="p-2 bg-[#e8e8e8]">Ver</Button>
              <Button className="p-2 bg-[#e8e8e8]">Filtrar</Button>
              <Button>
                <Link className="p-2 rounded-sm bg-lightBlue text-white" href='/equipment/new'>Novo</Link>
              </Button>
            </div>
          </div>
          <div className="flex w-full h-full rounded-lg gap-2">
            {/* List of itens */}
            <div className="w-full h-full rounded-lg bg-lightGray p-4 border border-white">
              {/* Table of contents */}
              <Table />
            </div>
            {/* <div className="w-[275px] h-full bg-lightGray rounded-lg">
              
            </div> */}
          </div>
        </div>
      </div>
    </Theme>
  );
}
