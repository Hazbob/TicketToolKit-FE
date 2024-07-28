"use client";

import { Ticket } from "@/Types/api";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// Define columns for the table
export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "EventName", 
    header: "Event Name",
  },
  {
    accessorKey: "PurchasePrice",  // Use purchasePrice from the Ticket type
    header: "Purchase Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("PurchasePrice"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "Quantity",  // Use quantity from the Ticket type
    header: "Quantity",
  },
  {
    accessorKey: "PricePerTicket",  // Use pricePerTicket from the Ticket type
    header: "Cost Per Ticket",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("PricePerTicket"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "isSold",  // Use isSold from the Ticket type
    header: "Status",
    cell: ({ row }) => {
      const isSold = row.getValue("isSold");
      return <div>{isSold ? "Sold" : "Unsold"}</div>;
    },
  },
  {
    accessorKey: "ViagogoLink",
    header: "Viagogo Link",
    cell: ({ row }) => {
        return <Link className="underline hover:text-blue-400" href={row.getValue("ViagogoLink")}>Link</Link>
    }
  }
];
