import { ReactElement } from "react";

export interface MainProps {
  children: React.ReactNode;
}
export interface OverviewProps {}
export interface TransactionProps {}
export interface AnalyticsProps {}
export interface WalletsProps {}
export interface InvoiceProps {}
export interface AccountProps {}
export interface SettingsProps {}

export interface TransactionListProps {
  transaction: TransactionData[];
  limit: number;
}
export interface TransactionData {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  ip_address: string;
}
export interface TableProps {
  title: string;
  headers: string[];
  data: TransactionData[];
  limit?: number;
}
export interface PaginationProps {}
export interface HeaderProps {}
export interface NavbarProps {}
export interface ProgressProps {
  title: string;
  currentProgress: number;
  totalProgress: number;
  icon?: ReactElement;
  color: string;
}

export interface LineGraphProps {
  title: string;
  income: number[];
  expense: number[];
}
export interface DougnutGraphProps {
  title: string;
  data: number[];
}