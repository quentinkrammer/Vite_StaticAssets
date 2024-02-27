import { type Logos, LOGO_MAP } from "./logoMap";

type LogoProps = { logo: Logos };
export function Logo({ logo }: LogoProps) {
  return <img src={LOGO_MAP[logo]} alt={logo} />;
}
