"use client";

import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "./redux/infoSlice"; // Adjust the path as necessary
import { RootState, AppDispatch } from "./redux/store"; // Adjust the path as necessary
import { TableNavbar } from "./components/navbar/TableNavbar";
import { RecordTable } from "./components/table/RecordTable";
import { Row } from "./types/row";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.info
  );

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Fragment>
      <TableNavbar />
      <main
        data-testid='main-page-container'
        className='flex min-h-screen flex-col items-center text-left justify-between p-24 bg-violet-200 dark:bg-lime-100'
      >
        <RecordTable data={data} columns={columns} />
      </main>
    </Fragment>
  );
}
