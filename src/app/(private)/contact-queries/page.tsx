"use client";
import { Contact } from "@/types/Contact";
import React, { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/ui/data-table/data-table-row-actions";
import { DataTable } from "@/components/ui/data-table/data-table";

const ContactQueriesPage = () => {
  const randomContacts: Contact[] = [
    {
      id: "id-1",
      name: "ZyXwVuTsrq",
      email: "abcde@example.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at.",
      phone: "555-018239",
      subject: "QwertyUiopAsd",
      response:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: new Date("2022-03-01T10:00:00Z"),
      status: "pending",
      updatedAt: new Date("2022-03-02T10:00:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-2",
      name: "JklmnopQrstu",
      email: "fghij@example.com",
      message:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      phone: "555-013456",
      subject: "ZxcvbnMasdfg",
      response:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      createdAt: new Date("2022-03-05T12:15:00Z"),
      status: "resolved",
      updatedAt: new Date("2022-03-06T12:15:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-3",
      name: "AbCdefGhIjk",
      email: "klmno@example.com",
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
      phone: "555-017890",
      subject: "QwertyUioPlkj",
      response:
        "Nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      createdAt: new Date("2022-04-01T08:20:00Z"),
      status: "archived",
      updatedAt: new Date("2022-04-02T08:20:00Z"),
      isRead: true,
      isReplied: false,
      isArchived: true,
      isDeleted: false,
    },
    {
      id: "id-4",
      name: "OpQrStUvWxz",
      email: "pqrst@example.com",
      message: "Nam libero tempore, cum soluta nobis est eligendi optio.",
      phone: "555-015678",
      subject: "AsDfGhJkLqP",
      response: "At vero eos et accusamus et iusto odio dignissimos.",
      createdAt: new Date("2022-05-10T09:30:00Z"),
      status: "pending",
      updatedAt: new Date("2022-05-11T09:30:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-5",
      name: "TuvwxyzabcD",
      email: "uvwxy@example.com",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      phone: "555-019876",
      subject: "MnbvcXdfrtY",
      response: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      createdAt: new Date("2022-06-12T14:45:00Z"),
      status: "resolved",
      updatedAt: new Date("2022-06-13T14:45:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-6",
      name: "EdCbaNmlkO",
      email: "zabcd@example.com",
      message: "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
      phone: "555-011234",
      subject: "YhGfDtReWqS",
      response: "Ut enim ad minima veniam, quis nostrum exercitation ullam.",
      createdAt: new Date("2022-07-15T07:10:00Z"),
      status: "archived",
      updatedAt: new Date("2022-07-16T07:10:00Z"),
      isRead: true,
      isReplied: false,
      isArchived: true,
      isDeleted: false,
    },
    {
      id: "id-7",
      name: "GHiJkLmNoP",
      email: "cadfe@example.com",
      message: "Sed ut perspiciatis unde omnis iste natus error sit.",
      phone: "555-014678",
      subject: "TgbvFrewQasD",
      response: "Integer amet ipsum tincidunt est facilisis fermentum.",
      createdAt: new Date("2022-08-20T11:00:00Z"),
      status: "pending",
      updatedAt: new Date("2022-08-21T11:00:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: true,
    },
    {
      id: "id-8",
      name: "KlmNOpQrsT",
      email: "nopqr@example.com",
      message: "At vero eos et accusamus et iusto odio dignissimos.",
      phone: "555-016532",
      subject: "WsXcDeRfvT",
      response: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      createdAt: new Date("2022-09-22T04:00:00Z"),
      status: "resolved",
      updatedAt: new Date("2022-09-23T04:00:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-9",
      name: "PQrStUvWxY",
      email: "xyzab@example.com",
      message: "Qui dolorem eum fugiat quo voluptas nulla pariatur.",
      phone: "555-019012",
      subject: "QazWsXedCvF",
      response: "Excepteur sint occaecat cupidatat non proident.",
      createdAt: new Date("2022-10-05T16:30:00Z"),
      status: "pending",
      updatedAt: new Date("2022-10-06T16:30:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: true,
    },
    {
      id: "id-10",
      name: "CdEfGhIjKl",
      email: "lmnop@example.com",
      message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      phone: "555-013219",
      subject: "ZxCvBnMgF",
      response: "Sed ut perspiciatis unde omnis iste natus error sit.",
      createdAt: new Date("2022-10-20T12:15:00Z"),
      status: "resolved",
      updatedAt: new Date("2022-10-21T12:15:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-11",
      name: "XyZabCdefG",
      email: "efghj@example.com",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      phone: "555-018310",
      subject: "TyUiOpLkJh",
      response: "Integer tincidunt nisl in sem ultricies, non dignissim nisl.",
      createdAt: new Date("2022-11-15T09:30:00Z"),
      status: "archived",
      updatedAt: new Date("2022-11-16T09:30:00Z"),
      isRead: true,
      isReplied: false,
      isArchived: true,
      isDeleted: false,
    },
    {
      id: "id-12",
      name: "AsDfGhJkL",
      email: "ijklmnop@example.com",
      message: "Nam libero tempore, cum soluta nobis est eligendi optio.",
      phone: "555-011987",
      subject: "PlQwErTyIo",
      response: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      createdAt: new Date("2022-12-01T14:30:00Z"),
      status: "pending",
      updatedAt: new Date("2022-12-02T14:30:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-13",
      name: "FgHiJkLmN",
      email: "mnopqrs@example.com",
      message: "Sed ut perspiciatis unde omnis iste natus error sit.",
      phone: "555-019874",
      subject: "AsdfghjklY",
      response:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      createdAt: new Date("2022-12-10T19:00:00Z"),
      status: "resolved",
      updatedAt: new Date("2022-12-11T19:00:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-14",
      name: "RtYuiOpLk",
      email: "tuvwx@example.com",
      message: "At vero eos et accusamus et iusto odio dignissimos.",
      phone: "555-015678",
      subject: "QazxswEdcV",
      response: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      createdAt: new Date("2022-12-20T16:10:00Z"),
      status: "pending",
      updatedAt: new Date("2022-12-21T16:10:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: true,
      isDeleted: false,
    },
    {
      id: "id-15",
      name: "ZxCvbNmasD",
      email: "xyzabc@example.com",
      message: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
      phone: "555-016543",
      subject: "AsDfGhJkLq",
      response: "Sed ut perspiciatis unde omnis iste natus error sit.",
      createdAt: new Date("2023-01-02T07:45:00Z"),
      status: "resolved",
      updatedAt: new Date("2023-01-03T07:45:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: true,
    },
    {
      id: "id-16",
      name: "QweRtyUioP",
      email: "abcdef@example.com",
      message: "Ut enim ad minima veniam, quis nostrum exercitation ullam.",
      phone: "555-018273",
      subject: "PlMvNiBhG",
      response: "Integer tincidunt nisl in sem ultricies, non dignissim nisl.",
      createdAt: new Date("2023-01-15T14:30:00Z"),
      status: "archived",
      updatedAt: new Date("2023-01-16T14:30:00Z"),
      isRead: true,
      isReplied: false,
      isArchived: true,
      isDeleted: false,
    },
    {
      id: "id-17",
      name: "ChAPrJxIYyo",
      email: "efghij@example.com",
      message:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      phone: "555-019456",
      subject: "WewrTyUmWo",
      response: "Fusce tincidunt aliquet lacus vitae lobortis.",
      createdAt: new Date("2023-02-01T09:00:00Z"),
      status: "pending",
      updatedAt: new Date("2023-02-02T09:00:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: true,
    },
    {
      id: "id-18",
      name: "AdminUser99",
      email: "admin93@example.com",
      message: "Integer vel augue nunc.",
      phone: "555-017890",
      subject: "XYzSpKuZa",
      response: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      createdAt: new Date("2023-02-10T10:30:00Z"),
      status: "resolved",
      updatedAt: new Date("2023-02-11T10:30:00Z"),
      isRead: true,
      isReplied: true,
      isArchived: false,
      isDeleted: false,
    },
    {
      id: "id-19",
      name: "EchoAcknow",
      email: "acknow@example.com",
      message:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
      phone: "555-015432",
      subject: "YhrEwtImoP",
      response: "Ut enim ad minima veniam, quis nostrum exercitation ullam.",
      createdAt: new Date("2023-02-20T16:30:00Z"),
      status: "archived",
      updatedAt: new Date("2023-02-21T16:30:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: true,
      isDeleted: false,
    },
    {
      id: "id-20",
      name: "JohnDoeSmith",
      email: "john.doe@example.com",
      message: "Suspendisse potenti. Sed eu nisi at non tincidunt rutrum.",
      phone: "555-013987",
      subject: "VfrTgbYhnU",
      response: "Proin commodo felis ut elit.</option>",
      createdAt: new Date("2023-02-28T18:00:00Z"),
      status: "pending",
      updatedAt: new Date("2023-02-29T18:00:00Z"),
      isRead: false,
      isReplied: false,
      isArchived: false,
      isDeleted: false,
    },
  ];

  const createStatusBadge = (status: "pending" | "resolved" | "archived") => {
    switch (status) {
      case "pending":
        return (
          <Badge className="capitalize bg-orange-500" variant="secondary">
            {status}
          </Badge>
        );
      case "resolved":
        return (
          <Badge className="capitalize bg-green-500" variant="default">
            {status}
          </Badge>
        );
      case "archived":
        return (
          <Badge className="capitalize bg-gray-500" variant="outline">
            {status}
          </Badge>
        );
      default:
        return null;
    }
  };

  const [contactData, setcontactData] = useState<Contact[]>(randomContacts);
  const columns: ColumnDef<Contact>[] = [
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
      cell: ({ row }) => createStatusBadge(row.getValue("status")),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone" />
      ),
    },
    {
      accessorKey: "subject",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Subject" />
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"));
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
              },
            },
          ]}
        />
      ),
    },
  ];
  const reload = () => {};
  return (
    <div className="w-full px-4 lg:px-6 py-4 lg:py-6">
      <h1 className="text-xl font-bold mb-4">Contact Queries</h1>
      <DataTable
        columns={columns}
        data={contactData}
        filterColumn="email"
        filterPlaceholder="Filter emails..."
        addBtnAction="/dashboard"
        reloadBtnAction={reload}
      />
    </div>
  );
};

export default ContactQueriesPage;
