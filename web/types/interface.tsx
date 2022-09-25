import { FunctionComponent } from "react";

export interface MainProps {
  children: React.ReactNode;
}
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
  limit?: number;
  children?: React.ReactNode;
}
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
export interface SvgIconProps {
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  rotateCenter?: number;
}
export interface SvgIcon extends FunctionComponent<SvgIconProps> {
  displayName?: string;
}
export interface BalanceProps {
  data: IBalanceData[];
}
export interface IBalanceData {
  title: string;
  amount: number;
  description: string;
}

export interface ITrendsProps {
  title: string;
  amount: number;
  maxProgress?: number;
  barColor?: string;
}
export interface ICreditScoreProps {
  score: number;
}
export interface IAccountsData {
  account_id: string;
  balances: {
    available: number;
    current: number;
    limit: number;
    iso_currency_code: string;
    unofficial_currency_code: string;
  };
  mask: string;
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}
export interface ILinkTokenData {
  link_token: string;
}
export interface OverviewProps {
  f?: string;
}
export interface TransactionProps {
  f?: string;
}
export interface AnalyticsProps {
  f?: string;
}
export interface WalletsProps {
  f?: string;
}
export interface InvoiceProps {
  f?: string;
}
export interface AccountProps {
  f?: string;
}
export interface SettingsProps {
  f?: string;
}
export interface PaginationProps {
  f?: string;
}
export interface HeaderProps {
  f?: string;
}
export interface NavbarProps {
  f?: string;
}
export interface IBalanceProps {
  f?: string;
}
export interface CalendarProps {
  f?: string;
}
