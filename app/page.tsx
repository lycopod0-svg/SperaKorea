import Image from "next/image";
import InquiryForm from "./components/InquiryForm";
import GalleryViewer from "./components/GalleryViewer";

export default function Home() {
  return (
    <main className="min-h-screen bg-tech-black text-white selection:bg-safety-orange selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo_v2.png"
              alt="SPERA Logo"
              width={300}
              height={100}
              className="h-[100px] w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#ai-functions" className="hover:text-white transition-colors">AI Features</a>
            <a href="#gallery" className="hover:text-white transition-colors">3D Experience</a>
            <a href="#specs" className="hover:text-white transition-colors">Tech Specs</a>
            <a href="#contact" className="hover:text-white transition-colors">Inquiry</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80 z-0"></div>
        {/* Dynamic Grid Background Effect - could add CSS animation here */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(255, 94, 14, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 94, 14, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-safety-orange/50 rounded-full bg-safety-orange/10 text-safety-orange text-sm font-bold tracking-widest uppercase animate-pulse">
            Next Gen Safety
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
            SVM-700Ai
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            The World's Most Advanced <span className="text-white">6CH AI Around View Monitoring System</span> with Deep Learning Object Detection.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-safety-orange text-black font-bold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105">
              Becoming a Global Distributor
            </a>
            <a href="#specs" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all">
              View Technical Specs
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-tech-gray border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-safety-orange/50 transition-colors group">
              <div className="w-12 h-12 mb-6 bg-gradient-to-br from-safety-orange to-red-600 rounded-lg flex items-center justify-center text-black font-bold text-xl mb-4 group-hover:scale-110 transition-transform">AI</div>
              <h3 className="text-2xl font-bold mb-3">Human Detection</h3>
              <p className="text-gray-400">Deep learning algorithms detect humans and vehicles in real-time with 99.8% confirmed accuracy.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-safety-orange/50 transition-colors group">
              <div className="w-12 h-12 mb-6 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">6CH</div>
              <h3 className="text-2xl font-bold mb-3">6-Channel DVR</h3>
              <p className="text-gray-400">Record all blind spots simultaneously. Supports up to 2TB SSD/HDD storage creating a complete blackbox.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl hover:border-safety-orange/50 transition-colors group">
              <div className="w-12 h-12 mb-6 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">3D</div>
              <h3 className="text-2xl font-bold mb-3">Dynamic 3D View</h3>
              <p className="text-gray-400">Seamless 3D stitching technology provides a bird's eye view without distortion.</p>
            </div>
          </div>
        </div>
      </section>


      {/* AI Functions Section */}
      <section id="ai-functions" className="pt-8 pb-24 bg-tech-gray border-t border-white/5 scroll-mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Equipped with AI Functions</h2>

          <div className="mb-12 text-center max-w-4xl mx-auto space-y-2">
            <p className="text-lg text-gray-300">
              It is a method of calculating the distance by identifying the shape of the human body or vehicle photographed by the camera.
            </p>
            <p className="text-lg text-gray-300">
              On the left screen, color indicates the proximity direction and distance. On the right screen, the distance of each object is displayed as a number.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-2 overflow-hidden">
              <Image
                src="/ai_function_1_v2.png"
                alt="AI Distance Calculation View"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-2 overflow-hidden">
              <Image
                src="/ai_function_2_v2.png"
                alt="AI Object Detection View"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Video Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="aspect-video w-full border border-white/10 shadow-2xl shadow-safety-orange/10">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/71pELLyWmiI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="pt-8 pb-12 bg-black relative scroll-mt-40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Multiple View Modes</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Spera Around View support multiple view modes</p>

          {/* Placeholder for 3D Carousel */}
          {/* 3D Gallery Component */}
          <GalleryViewer />
        </div>
      </section>

      {/* Vehicle Images Section */}
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Provide Various Vehicle images</h2>

          <div className="grid grid-cols-1 gap-12">
            {/* 13 Types Special Vehicles */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-safety-orange pl-4 border-l-4 border-safety-orange">
                13types Special Vechicles for 3D software
              </h3>
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 overflow-hidden">
                <Image
                  src="/special_vehicles_transparent.png"
                  alt="13 types of special vehicles"
                  width={1200}
                  height={300}
                  className="w-[80%] h-auto object-contain mx-auto"
                />
              </div>
            </div>

            {/* 70 Types Passenger Cars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-safety-orange pl-4 border-l-4 border-safety-orange">
                70 types Passanger Cars for 3D software
              </h3>
              <div className="pl-4">
                <p className="text-gray-400 text-lg max-w-2xl text-left">
                  Comprehensive library of sedan, and truck models optimized for varying 3D environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Specs Section */}
      <section id="specs" className="pt-8 pb-24 bg-tech-gray scroll-mt-40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 border-l-4 border-safety-orange pl-6">Technical Specifications</h2>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse table-fixed">
              <tbody className="divide-y divide-white/10">
                <tr className="bg-white/5">
                  <td className="p-4 font-medium text-gray-400 w-1/3 align-top text-sm md:text-base">Model</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">SPERA SVM 700 AI</td>
                </tr>
                <tr className="bg-transparent">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Camera Resolution</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">1920X1080(Full HD)</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Camera angle of view</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">180 degree or more(4channels) +2channels(Optional)</td>
                </tr>
                <tr className="bg-transparent">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Camera waterproof rating</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">IP69</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">View Mode</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">Top view + (Front/Rear/Left/Right/Side), Top view mode</td>
                </tr>
                <tr className="bg-transparent">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Video Output</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">Full HD, 30fps(HDMI, AHD, CVBS)</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Power</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">12~24V</td>
                </tr>
                <tr className="bg-transparent">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Recording</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">USB 2TB(120days recording/storage sold separately)</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">AI capabilities</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">4/6 channel intelligent camera(human body, vehicle detection camera)</td>
                </tr>
                <tr className="bg-transparent">
                  <td className="p-4 font-medium text-gray-400 align-top text-sm md:text-base">Certification</td>
                  <td className="p-4 font-bold text-white whitespace-normal break-words align-top text-sm md:text-base">KC/FCC/E-Mark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-8 pb-24 bg-black relative overflow-hidden scroll-mt-40">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-safety-orange/5 skew-x-12 transform origin-top-right pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Become a Global Partner</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Join the revolution in heavy vehicle safety. We are actively recruiting official distributors in North America, Europe, and the Middle East.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-safety-orange"></span>
                <span>Exclusive Territory Protection</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-safety-orange"></span>
                <span>Marketing & Technical Support</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-safety-orange"></span>
                <span>OEM/ODM Customization Available</span>
              </li>
            </ul>
          </div>

          <div className="bg-tech-gray/50 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg text-white mb-2">JCH Auto, Inc.</p>
            <p className="max-w-md">
              A-1401, 136 LS-Ro, DongAn-Gu, AnYang-Si, GyeongGi-Do, Republic of Korea
            </p>
            <p className="mt-4 text-gray-600">© {new Date().getFullYear()} SPERA Global. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/jch_logo.png"
              alt="JCH Auto Logo"
              width={200}
              height={80}
              className="h-[60px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
