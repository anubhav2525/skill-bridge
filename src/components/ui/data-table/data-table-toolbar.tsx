"use client";

import type { Table } from "@tanstack/react-table";
import { PlusCircle, X, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import Link from "next/link";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterColumn?: string;
  filterPlaceholder?: string;
  reloadBtnAction?: () => void;
  addLink?: string;
}

export function DataTableToolbar<TData>({
  table,
  filterColumn,
  filterPlaceholder = "Filter...",
  reloadBtnAction,
  addLink,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filterColumn && (
          <Input
            placeholder={filterPlaceholder}
            value={
              (table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterColumn)?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {addLink && (
          <Link className="hidden lg:flex" href={addLink}>
            <Button variant="outline" size="sm" className="ml-auto h-8 lg:flex">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add
            </Button>
          </Link>
        )}
        {reloadBtnAction && (
          <Button variant="outline" size="sm" className="ml-auto h-8 lg:flex">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reload
          </Button>
        )}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
