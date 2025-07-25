import Navbar from "../components/navbar"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  interface NavItem {
    menu: string
    href: string
  }

  const navItems: NavItem[] = [
    { menu: "Home", href: "/" },
    { menu: "Tentang Kami", href: "/about" },
    { menu: "Jadwal Sertifikasi", href: "/event" },
    { menu: "Layanan & Konsultansi", href: "/services" },
    { menu: "kontak", href: "/services" }
  ]

  return (
    <html lang="en">
      <body>
        <Navbar items={navItems} />
        <main>{children}</main>
      </body>
    </html>
  )
}