import FooterSection from "../components/footerSection";
import JadwanKegiatan from "../components/JadwalKegiatan";
import Layanan from "../components/Layanan";
import MitraKami from "../components/Mitra";
import ParticlesBackground from "../components/ParticlesBackground";

interface itemType {
  title: string,
  img: string,
  btn: string
}
export default function Home() {

  const itemLayanan: itemType[] = [
    {title: "Sertifikasi GRCCP", img: "grcce.png", btn: "lihat selengkapnya"},
    
    {title: "Sertifikasi GRCCM", img: "grccm.png", btn: "lihat selengkapnya"},
    
    {title: "Sertifikasi GRCCA", img: "grcca.png", btn: "lihat selengkapnya"},
    
    {title: "Sertifikasi GRCCE", img: "grccp.png", btn: "lihat selengkapnya"},
  ]

  const setKontak = 
    {alamat: "gedung alumni IPB ruang 105 C, jl Padjajaran, tegallega, bogor tengah", telp: "0821-1005-XXXX" , email: "lspgrc.mail@gmail.com"}
  

  const setInformasi = [
    {menu: "Jadwal Sertifikas", url: "/event"},
    {menu: "karir", url: "/karir"},
    {menu: "FAQ", url: "/faq"}
  ]
  return (
    <div className="relative min-h-full bg-[#222935]"> {/* Background utama #222935 */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Section slider */}

      <div className="relative z-10">
        <div className="h-full bg-transparent mx-4 text-white flex items-center justify-center">
          
          <div className="grid grid-cols-2 m-6 w-full p-6 items-center gap-[66px] ">
            <div><div className="text-[40px] font-bold mb-4">Sertifikasi Governance Risk Compliance (<span className="text-red-500">GRC</span>)</div>
            <div className="text-justify">Skema sertifikasi yang dikembangkan oleh LSP GRC mengacu kepada SKK Khusus yang disusun oleh Asosiasi GRC/IGRC (Indonesian Governance Risk Compliance) yang telah disahkan oleh Kementrian Tenaga Kerja. Skema-skema tersebut disesuaikan dengan kebutuhan pengembangan GRC pada organisasi bisnis dan non bisnis di tanah air</div></div>
            <div id="grid-2">   
              <div className="flex flex-row gap-4">
                <div className="flex-1"><img src="gambar1.jpg" className="rounded-[10px]" alt="Logo" /></div>
                
                <div className="flex-1"><img src="gambar2.jpg" className="rounded-[10px]" alt="Logo" /></div>
              </div>
              <div className="flex mt-6">
                <div className="flex-1"><img src="gambar3.jpg" className="h-60 w-full rounded-[10px]" alt="Logo" /></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section Skema sertifikasi*/}
        <div className="bg-transparent flex"><img src="wave1.svg" className="flex-1 -z-10" alt="Deskripsi SVG" /></div>
        <div className="h-7xl p-10 bg-[#FFF9F2] -mt-20">
          <p className="text-center text-5xl font-bold">Skema Sertifikasi</p>
          <Layanan setLayanan={itemLayanan} />
        </div>
        
        {/* Section kegiatan*/}
        <div className="h-full relative bg-gray-200 overflow-hidden">
          <div className="p-[80px] relative z-20"><JadwanKegiatan /></div>
          <div className="absolute bottom-0 w-full z-10">
            <img src="/wave2.svg" alt="Wave decoration" className="w-full" />
          </div>
        </div>

        {/* Section mitra */}
        <div className="h-full bg-[#EA615D]">
          <div className="h-full bg-linear-to-t from-[#FFFFFF] via-[#F7E9DB] to-[#EA615D] pb-35">
            <MitraKami/>
          </div>
        </div>

        {/*Section Footer #1F2937*/}
        <div className="bg-[#1F2937] h-full">
        <FooterSection kontak={setKontak} informasi={setInformasi} />
        </div>
      </div>
    </div>
  );
}