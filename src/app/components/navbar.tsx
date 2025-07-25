import Link from "next/link"

interface NavItem {
    href: string
    menu: string
}

interface NavbarProps {
    items: NavItem[]
}

export default function Navbar({ items }: NavbarProps) {
    return (
        <nav className="bg-white border-b border-gray-300 shadow-md">
            <div className="flex flex-row justify-between mx-[30px] items-center gap-2">
                <div>
                    <img src="logolsp.jpg" className="w-[127px] h-[70px]" alt="Logo" />
                </div>
                <div className="flex text-2xl text-[#222935] gap-[42px]">
                    {items.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href} 
                            className="border-transparent border-b-3 hover:border-red-500"
                        >
                            {item.menu}
                        </Link>
                    ))}
                </div>
                    
                <div className="text-2xl">
                    <button className="bg-red-500 hover:scale-105 hover:bg-red-600 text-white py-1 px-6 rounded-md transform-all duration-600">
                        Daftar
                    </button>
                </div>
            </div>
        </nav>
    )
}