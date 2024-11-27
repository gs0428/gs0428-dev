import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FirebaseProvider from "@/components/provider/firebase";
import NextUIProvider from "@/components/provider/next-ui";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "임광수 | 포트폴리오",
  description: "안녕하세요. 프론트엔드 개발자 임광수입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        <NextUIProvider>
          <FirebaseProvider>
            <Header />
            {children}
            <Footer />
          </FirebaseProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
