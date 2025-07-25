interface itemType {
    title: string,
    img: string,
    btn: string
}

interface itemProp {
    setLayanan: itemType[]
}

export default function Layanan({setLayanan}:itemProp) {
    

    return (
        <div className="relative min-h-[1000px]">
            {/* Lingkaran (di belakang) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-red-400 w-[911px] h-[911px] rounded-full flex items-center justify-center z-10">
                <div className="bg-red-300 w-[806px] h-[806px] rounded-full"></div>
            </div>

            {/* Grid Cards (di depan) */}
            <div className="relative grid grid-cols-2 gap-x-[82px] gap-y-[71px] z-20 pt-[90px] w-fit mx-auto">
                {setLayanan.map((item ,index) => (
                    <div key={index} className="w-[352px]">
                        <div className="bg-white rounded-lg border border-gray-300 shadow-xl h-[435px] flex flex-col items-center justify-between p-8">
                            <div className="text-xl font-bold">{item.title}</div>
                            <div><img src={item.img} alt="" /></div>
                            <button className="bg-red-500 py-2 px-6 text-white font-medium rounded-lg hover:bg-red-600 hover:scale-105 transform-all duration-600">{item.btn}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}