import { FunctionComponent } from "react";

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
  title?: string;
  headers?: string[];
  data?: any[];
  limit?: number;
  children?: React.ReactNode;
}
export interface PaginationProps {}
export interface HeaderProps {}
export interface NavbarProps {}
export interface ProgressProps {
  title: string;
  currentProgress: number;
  totalProgress: number;
  icon?: React.ReactElement;
  color: string;
}

export interface LineGraphProps {
  income: number[];
  expense: number[];
  labelColor?: string;
}
export interface DougnutGraphProps {
  data: number[];
  labelColor?: string;
}
export interface CalendarProps {}
export interface SvgIconProps {
  width?: number;
  height?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  rotateCenter?: number;
}
export interface SvgIcon extends FunctionComponent<SvgIconProps> {}
export interface BalanceProps {
  data: IBalanceData[];
}
export interface IBalanceData {
  title: string;
  amount: number;
  description: string;
}
export interface IBalanceProps {}
export interface ITrendsProps {
  title: string;
  amount: number;
  maxProgress?: number;
  barColor?: string;
}
export interface ICreditScoreProps {
  score: number;
}
