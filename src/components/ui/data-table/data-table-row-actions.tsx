"use client"

import type { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  actions: {
    label: string
    onClick: (row: TData) => void
  }[]
}

export function DataTableRowActions<TData>({ row, actions }: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {actions.map((action, index) => (
          <DropdownMenuItem key={index} onClick={() => action.onClick(row.original)}>
            {action.label}
          </DropdownMenuItem>
        ))}
        {actions.length > 0 && <DropdownMenuSeparator />}
        <DropdownMenuItem
          onClick={() => {
            // Default action - view details
            console.log("View details for:", row.original)
          }}
        >
          View details
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
