"use client";

import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfo } from "./redux/infoSlice"; // Adjust the path as necessary
import { RootState, AppDispatch } from "./redux/store"; // Adjust the path as necessary
import { TableNavbar } from "./components/navbar/TableNavbar";
import { RecordTable } from "./components/table/RecordTable";
import { Row } from "./types/row";
import Loader from "./components/shared/Loader";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.info
  );

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const columns = [
    { header: "Customer Id", accessor: "_id" },
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Email", accessor: "email" },
    { header: "Age", accessor: "age" },
    { header: "Created At", accessor: "createdAt" },
  ];
  if (loading) return <Loader />;
  if (error) throw new Error(error);
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
