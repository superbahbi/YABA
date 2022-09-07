export interface ILPBodyProps { }
export interface ILPFooterProps { }

export interface ILPHeroProps {
  bgVideo: string;
}
export interface ILPNavbarProps {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  theme: boolean;
}

export interface ILPToastProps {
  justifySelfEnd?: boolean;
  textContent: string;
}