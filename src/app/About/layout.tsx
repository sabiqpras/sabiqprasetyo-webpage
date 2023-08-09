import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "Get to know me better!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
