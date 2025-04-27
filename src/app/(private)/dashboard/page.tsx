"use client";
import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table/data-table";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/ui/data-table/data-table-row-actions";
import SectionCards from "@/components/ui/section-cards";
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";

// Example data type
interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  createdAt: Date;
}

// Example data
const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "user1@example.com",
    createdAt: new Date("2023-01-01"),
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "user2@example.com",
    createdAt: new Date("2023-01-02"),
  },
  {
    id: "12a3bc45",
    amount: 200,
    status: "success",
    email: "user3@example.com",
    createdAt: new Date("2023-01-03"),
  },
  {
    id: "67d8ef90",
    amount: 75,
    status: "failed",
    email: "user4@example.com",
    createdAt: new Date("2023-01-04"),
  },
  {
    id: "12g3hi45",
    amount: 150,
    status: "success",
    email: "user5@example.com",
    createdAt: new Date("2023-01-05"),
  },
  {
    id: "67j8kl90",
    amount: 300,
    status: "pending",
    email: "user6@example.com",
    createdAt: new Date("2023-01-06"),
  },
  {
    id: "12m3no45",
    amount: 225,
    status: "processing",
    email: "user7@example.com",
    createdAt: new Date("2023-01-07"),
  },
  {
    id: "67p8qr90",
    amount: 175,
    status: "success",
    email: "user8@example.com",
    createdAt: new Date("2023-01-08"),
  },
  {
    id: "12s3tu45",
    amount: 250,
    status: "failed",
    email: "user9@example.com",
    createdAt: new Date("2023-01-09"),
  },
  {
    id: "67v8wx90",
    amount: 350,
    status: "success",
    email: "user10@example.com",
    createdAt: new Date("2023-01-10"),
  },
];

const DashboardPage = () => {
  const [tableData, setTableData] = useState<Payment[]>(data);

  // Define your column definitions
  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }: any) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        switch (status) {
          case "pending":
            return (
              <Badge className="capitalize bg-orange-500" variant="secondary">
                {status}
              </Badge>
            );
          case "processing":
            return (
              <Badge className="capitalize bg-yellow-500" variant="outline">
                {status}
              </Badge>
            );
          case "success":
            return (
              <Badge className="capitalize bg-green-500 " variant="default">
                {status}
              </Badge>
            );
          default:
            return (
              <Badge className="capitalize bg-red-500" variant="destructive">
                {status}
              </Badge>
            );
        }
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
      cell: ({ row }) => {
        const amount = Number.parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date;
        return <div>{date.toLocaleDateString()}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          actions={[
            {
              label: "Edit",
              onClick: (rowData) => {
                console.log("Edit", rowData);
                // Implement your edit logic here
              },
            },
            {
              label: "Delete",
              onClick: (rowData) => {
                console.log("Delete", rowData);
                // Example: Remove from table data
                setTableData((prev) =>
                  prev.filter((item) => item.id !== (rowData as Payment).id)
                );
              },
            },
          ]}
        />
      ),
    },
  ];
  return (
    <div className=" w-full px-4 lg:px-6 py-4 lg:py-6">
      <div className="flex flex-col gap-4">
        <SectionCards />
        <ChartAreaInteractive />
        <div className="py-4">
          <h1 className="text-xl font-bold mb-4">Payments</h1>
          <DataTable
            columns={columns}
            data={tableData}
            filterColumn="email"
            filterPlaceholder="Filter emails..."
          />
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
