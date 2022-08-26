export interface MainProps {
  children: React.ReactNode;
}
export interface OverviewProps {}
export interface TransactionProps {}
export interface AnalyticsProps {}
export interface WalletsProps {}
export interface InvoicesProps {}
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
