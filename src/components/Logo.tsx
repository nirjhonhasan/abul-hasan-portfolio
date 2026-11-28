import Image from "next/image";

// The AH monogram + name. The logo image has wide empty margins, so it is scaled up inside a small clipped box.
export default function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="relative block h-6 w-[45px] overflow-hidden">
        <Image
          src="/abul_hasan.webp"
          alt=""
          fill
          sizes="68px"
          className="scale-[1.45] object-cover dark:hue-rotate-180 dark:invert"
        />
      </span>
      <span className="text-base font-bold whitespace-nowrap min-[360px]:text-lg">
        Abul <span className="text-brand-blue dark:text-[#9b8aff]">Hasan</span>
      </span>
    </span>
  );
}
