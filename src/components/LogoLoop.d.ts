import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';

export type LogoLoopDirection = 'left' | 'right' | 'up' | 'down';

export type LogoLoopImageItem = {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
};

export type LogoLoopNodeItem = {
  node: ReactNode;
  title: string;
  href?: string;
  ariaLabel?: string;
};

export type LogoLoopItem = LogoLoopImageItem | LogoLoopNodeItem;

export type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: LogoLoopDirection;
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoLoopItem, key: string | number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

declare const LogoLoop: NamedExoticComponent<LogoLoopProps>;

export default LogoLoop;
