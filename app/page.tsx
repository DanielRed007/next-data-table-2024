import { RecordTable } from "./components/table/RecordTable";

export default function Home() {
  const data = [
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
    {
      ["regular-col-1"]: "Regular Text Column",
      ["regular-col-2"]: "Regular Text Column",
      ["regular-col-3"]: "Regular Text Column",
      ["regular-col-4"]: "Regular Text Column",
      ["regular-col-5"]: "Regular Text Column",
      ["regular-col-6"]: "Regular Text Column",
      ["active-col-1"]: "Active Column",
      ["regular-col-7"]: "Regular Text Column",
    },
  ];

  const columns = [
    { header: "Regular Text", accessor: "regular-col-1" },
    { header: "Regular Text", accessor: "regular-col-2" },
    { header: "Regular Text", accessor: "regular-col-3" },
    { header: "Regular Text", accessor: "regular-col-4" },
    { header: "Regular Text", accessor: "regular-col-5" },
    { header: "Regular Text", accessor: "regular-col-6" },
    { header: "Active", accessor: "active-col-1" },
    { header: "Regular Text", accessor: "regular-col-7" },
  ];

  return (
    <main className='flex min-h-screen flex-col items-center text-left justify-between p-24'>
      <RecordTable data={data} columns={columns} />
    </main>
  );
}
