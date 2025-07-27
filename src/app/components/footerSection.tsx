import Link from "next/link"

interface KontakItem {
    alamat: string
    telp: string
    email: string
}

interface InformasiItem {
    menu: string
    url: string
}

interface FooterProps {
    kontak: KontakItem
    informasi: InformasiItem[]
}

export default function FooterSection({ kontak, informasi }: FooterProps) {
    return (
        <>
            <div className="grid grid-cols-3 p-4 gap-6 ">
                <div className="flex items-center justify-center"><img src="/LSP_WHITE.png" alt="Logo LSP" /></div>
                <div className="flex flex-col gap-4 py-10 justify-center">
                    <p className="text-xl font-bold text-white">Kontak Kami</p>
                    <table className="text-white w-full">
                        <tbody className="[&>tr>td]:py-1">
                            <tr>
                                <td className="font-semibold w-24">Telepon</td>
                                <td className="px-2">:</td>
                                <td>{kontak.telp}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Email</td>
                                <td className="px-2">:</td>
                                <td>{kontak.email}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Alamat</td>
                                <td className="px-2">:</td>
                                <td>{kontak.alamat}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-white flex flex-col py-10 gap-4">
                    <div className="text-2xl font-bold">Informasi</div>
                    {informasi.map((data) => (
                        <div key={data.url}>
                            <Link href={data.url} className="hover:font-medium hover:underline">
                                {data.menu}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row border-t-2 py-4 border-white justify-between text-white mx-10">
                <div>© 2025 | PT LSP Governansi Risiko Kontrol Indonesia</div>
                <div>Sosial Media</div>
            </div>
        </>
    )
}