export type ButtonProps = {
  children: JSX.Element;
  type: 'primary' | 'secondary';
  handleClick?: () => void;
};

export type LayoutProps = {
  children: JSX.Element;
};

export type MenuCardProps = {
  logo?: JSX.Element;
  title?: string;
  description?: string;
};
