import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Archive",
  description: "Check out my collection of projects!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
