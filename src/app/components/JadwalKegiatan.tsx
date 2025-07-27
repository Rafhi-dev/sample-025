
export default function JadwanKegiatan() {
    
    return (<>
    <div className="grid grid-cols-2 ">
        {/* Grid 1 */}
        <div className="flex flex-col items-center justify-center gap-8">
            <p className="max-w-xs text-6xl text-center font-bold">Jadwal Kegiatan</p>
            
            <button className="bg-red-500 py-2 px-6 text-white font-medium rounded-lg hover:bg-red-600 hover:scale-105 transform-all duration-600 ">Lihat lebih lanjut</button>
        </div>
        
        {/* Grid 2 */}
        <div className="flex flex-row gap-4">
            <div className="bg-white rounded-lg shadow-lg w-[290px] h-[530px] p-4 space-y-4 ">
                
                <div className="p-2 space-y-2">
                <img src="gambar1.jpg" className="w-[251px] h-[251px] mb-[18px]" alt="" />
                <p className="text-lg font-bold">Pelatihan dan Sertifikasi skema GRCCP</p>
                <p className="my-4">Penyelenggara: PPA&K</p>
                <button className="bg-red-500 py-2 px-12 border-2 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 hover:scale-105 transform-all duration-600 ">Daftar Sekarang</button>
                <button className="bg-transparent py-2 px-4 text-gray-700 border-2 font-medium rounded-full hover:bg-gray-500 hover:text-white hover:scale-105 transform-all duration-600 ">Pelajari Skema Sertifikasi</button>
            
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-[290px] h-[530px] p-4 space-y-4 ">
                
                <div className="p-2 space-y-2">
                <img src="gambar2.jpg" className="w-[251px] h-[251px] mb-[18px]" alt="" />
                <p className="text-lg font-bold">Pelatihan dan Sertifikasi skema GRCCP</p>
                <p className="my-4">Penyelenggara: PPA&K</p>
                <button className="bg-red-500 py-2 px-12 border-2 bg-red-500 text-white font-medium rounded-full hover:bg-red-600 hover:scale-105 transform-all duration-600 ">Daftar Sekarang</button>
                <button className="bg-transparent py-2 px-4 text-gray-700 border-2 font-medium rounded-full hover:bg-gray-500 hover:text-white hover:scale-105 transform-all duration-600  ">Pelajari Skema Sertifikasi</button>
            
                </div>
            </div>
        </div>
    </div>
    </>)
}