import { FunctionComponent } from "react";

export interface IMainProps {
  children: React.ReactNode;
}
export interface ITransactionListProps {
  transaction: ITransactionData[];
  limit: number;
}
export interface ITransactionData {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  ip_address: string;
}
export interface ITableProps {
  title?: string;
  headers?: string[];
  limit?: number;
  children?: React.ReactNode;
}
export interface IProgressProps {
  title: string;
  currentProgress: number;
  totalProgress: number;
  icon?: React.ReactElement;
  color: string;
}

export interface ILineGraphProps {
  income: number[];
  expense: number[];
  labelColor?: string;
}
export interface IDougnutGraphProps {
  data: number[];
  labelColor?: string;
}
export interface ISvgIconProps {
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  rotateCenter?: number;
}
export interface ISvgIcon extends FunctionComponent<ISvgIconProps> {
  displayName?: string;
}
export interface ISvgImage {
  strokeColor: string;
}
export interface IBalanceProps {
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
export interface IResponseProps {
  status?: string;
  errors?: string | string[];
}
export interface IVerifyProps {
  code: string;
}
export interface IButtonProps {
  direction?: "left-0" | "right-0" | "top-0" | "bottom-0";
  inset?: "inset-x-0" | "inset-y-0";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}
export interface ICardProps {
  title: string;
  children: React.ReactNode;
}

export interface ILinkTokenData {
  link_token: string;
}
export interface IOverviewProps {
  f?: string;
}
export interface ITransactionProps {
  f?: string;
}
export interface IAnalyticsProps {
  f?: string;
}
export interface IWalletsProps {
  f?: string;
}
export interface IInvoiceProps {
  f?: string;
}
export interface IAccountProps {
  f?: string;
}
export interface ISettingsProps {
  f?: string;
}
export interface IPaginationProps {
  f?: string;
}
export interface IHeaderProps {
  f?: string;
}
export interface INavbarProps {
  f?: string;
}
export interface IBalanceProps {
  f?: string;
}
export interface ICalendarProps {
  f?: string;
}
