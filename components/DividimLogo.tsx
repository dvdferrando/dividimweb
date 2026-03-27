import Image from "next/image";

const SRC = "/dividim_logo.png";
const WIDTH = 724;
const HEIGHT = 736;

type DividimLogoProps = {
  className?: string;
  /** Tailwind height class, e.g. h-8, h-28 */
  heightClass?: string;
  priority?: boolean;
};

export function DividimLogo({
  className = "",
  heightClass = "h-8",
  priority = false,
}: DividimLogoProps) {
  return (
    <Image
      src={SRC}
      alt="Dividim"
      width={WIDTH}
      height={HEIGHT}
      className={`w-auto object-contain ${heightClass} ${className}`}
      priority={priority}
    />
  );
}
