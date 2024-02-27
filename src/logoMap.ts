import reactLogo from "./assets/logo/react.svg";
import viteLogo from "./assets/logo/vite.svg";

export const LOGO_MAP = { react: reactLogo, vite: viteLogo } as const;
export type Logos = keyof typeof LOGO_MAP;
