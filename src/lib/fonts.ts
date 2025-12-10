import { Noto_Sans_TC, LXGW_WenKai_Mono_TC } from "next/font/google";

export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-tc",
});

export const lxgwWenKaiMonoTC = LXGW_WenKai_Mono_TC({
  weight: ["400"],
  display: "swap",
  variable: "--font-lxgw-wenkai-mono-tc",
  preload: false,
});
