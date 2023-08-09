import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ask",
  description: "Contact and connect with me!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
