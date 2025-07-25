export default function MitraKami() {
    return (
        <>
        <div className="h-full flex flex-col items-center">
            <div className="text-center text-4xl font-semibold mt-20 pb-8">Didukung Oleh :</div>
            <div className="w-[300px] max-h-[200px] flex"><img src="/igrc.png" className="bg-transparent " alt="" /></div>
        </div>
        <div className="h-full flex flex-col items-center">
            <div className="text-center text-4xl font-semibold mt-20 pb-8">Mitra kami :</div>
        </div>

        <div className="h-full flex flex-row items-center justify-center gap-4">
        <div className="w-[150px] max-h-[150px] flex justify-center"><img src="/rmg.png" className="bg-transparent" alt="" /></div>
        <div className="w-[150px] max-h-[150px] flex justify-center"><img src="/centrois.png" className="bg-transparent" alt="" /></div>
        <div className="w-[150px] max-h-[150px] flex justify-center"><img src="/bsa.png" className="bg-transparent" alt="" /></div>

        </div>

        </>
    )
}