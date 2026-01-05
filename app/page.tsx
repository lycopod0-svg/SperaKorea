import Image from "next/image";
import InquiryForm from "./components/InquiryForm";
import GalleryViewer from "./components/GalleryViewer";

export default function Home() {
  return (
    <main className="bg-background-light text-text-main font-sans antialiased">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
          <a className="flex items-center gap-3" href="#">
            <div className="h-20 w-auto flex items-center">
              <Image
                src="/logo_new.png"
                alt="SPERA GLOBAL Logo"
                width={300}
                height={80}
                className="h-20 w-auto object-contain brightness-0"
              />
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8 font-display font-medium text-sm uppercase tracking-wide text-gray-600">
            <a className="hover:text-primary transition-colors py-2" href="#ai-functions">AI Functions</a>
            <a className="hover:text-primary transition-colors py-2" href="#view-modes">View Modes</a>
            <a className="hover:text-primary transition-colors py-2" href="#tech-specs">Tech Specs</a>
            <a className="hover:text-primary transition-colors py-2" href="#inquiry">Inquiry</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-2xl text-gray-600">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-bg">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-display font-bold tracking-widest mb-6 border border-blue-200 uppercase">Next Gen Safety</span>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-6 tracking-tight text-text-main leading-tight">
            SVM-700Ai
          </h1>
          <p className="text-xl lg:text-2xl text-text-sub mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            The World's Most Advanced <span className="font-bold text-text-main">6CH AI Around View Monitoring System</span><br className="hidden md:block" /> with Deep Learning Object Detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry" className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-display font-semibold text-lg transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1 text-center">
              Become a Global Distributor
            </a>
            <a href="#tech-specs" className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-display font-semibold text-lg transition-all shadow-sm hover:shadow-md text-center">
              View Technical Specs
            </a>
          </div>
        </div>
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white relative -mt-16 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-primary/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="font-display font-black text-lg">AI</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-main">Human Detection</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                Deep learning algorithms detect humans and vehicles in real-time with 99.8% confirmed accuracy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-primary/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="font-display font-black text-lg">6CH</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-main">6-Channel DVR</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                Record all blind spots simultaneously. Supports up to 2TB SSD/HDD storage creating a complete blackbox.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-primary/20 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="font-display font-black text-lg">3D</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-text-main">Dynamic 3D View</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                Seamless 3D stitching technology provides a bird's eye view without distortion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Functions */}
      <section id="ai-functions" className="py-24 bg-background-light scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-text-main">Equipped with AI Functions</h2>
            <p className="text-text-sub max-w-2xl mx-auto leading-relaxed">
              Real-time distance calculation identifying human body shapes or vehicles. The intuitive UI displays proximity direction and precise distance measurements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 overflow-hidden">
              <Image
                src="/ai_function_1_v2.png"
                alt="AI Distance Calculation View"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-card border border-gray-100 overflow-hidden">
              <Image
                src="/ai_function_2_v2.png"
                alt="AI Object Detection View"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
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

      {/* View Modes */}
      <section id="view-modes" className="py-24 bg-background-light scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-text-main">Multiple View Modes</h2>
            <p className="text-text-sub leading-relaxed">Spera Around View supports multiple view configurations for optimal safety.</p>
          </div>
          <GalleryViewer />
        </div>
      </section>

      {/* Vehicle Models */}
      <section className="py-24 bg-background-alt tech-grid-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-text-main">Provide Various Vehicle Images</h2>
            <p className="text-text-sub leading-relaxed">Comprehensive library of optimized 3D models for various commercial vehicles.</p>
          </div>
          <div className="space-y-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-primary mr-4 rounded-full"></div>
                <h3 className="text-xl font-display font-bold text-text-main">13 Types Special Vehicles for 3D Software</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
                <Image
                  src="/special_vehicles_transparent.png"
                  alt="13 types of special vehicles"
                  width={1200}
                  height={300}
                  className="w-[80%] h-auto object-contain mx-auto"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-primary mr-4 rounded-full"></div>
                <h3 className="text-xl font-display font-bold text-text-main">70 Types Passenger Cars for 3D Software</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                <p className="text-text-sub mb-4 leading-relaxed">Comprehensive library of sedan and truck models optimized for varying 3D environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section id="tech-specs" className="py-24 bg-background-light border-t border-gray-100 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-10">
            <div className="w-1 h-8 bg-primary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-display font-bold text-text-main">Technical Specifications</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-gray-100 text-sm lg:text-base">
                {[
                  { label: "Model", value: "SPERA SVM 700 AI" },
                  { label: "Camera Resolution", value: "1920X1080(Full HD)" },
                  { label: "Camera angle of view", value: "180 degree or more(4channels) +2channels(Optional)" },
                  { label: "Camera waterproof rating", value: "IP69" },
                  { label: "View Mode", value: "Top view + (Front/Rear/Left/Right/Side), Top view mode" },
                  { label: "Video Output", value: "Full HD, 30fps(HDMI, AHD, CVBS)" },
                  { label: "Power", value: "12~24V" },
                  { label: "Recording", value: "USB 2TB(120days recording/storage sold separately)" },
                  { label: "AI capabilities", value: "4/6 channel intelligent camera(human body, vehicle detection camera)" },
                  { label: "Certification", value: "KC/FCC/E-Mark" },
                ].map((spec, index) => (
                  <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                    <th className="py-4 px-6 bg-blue-50/50 font-display font-semibold text-gray-700 w-1/3 lg:w-1/4">
                      {spec.label}
                    </th>
                    <td className="py-4 px-6 text-text-main">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-24 bg-primary text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6 text-white text-3xl font-display font-extrabold tracking-tight">
                  <span className="material-symbols-outlined text-5xl">view_in_ar</span>
                  <span>SPERA</span>
                </div>
                <h2 className="text-4xl font-display font-bold mb-6">Become a Global Distributor</h2>
                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                  Join the revolution in heavy vehicle safety. We are actively recruiting official distributors in North America, Europe, Australia and the Middle East.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white">check_circle</span>
                  <span className="text-blue-50">Exclusive Territory Protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white">check_circle</span>
                  <span className="text-blue-50">Marketing & Technical Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white">check_circle</span>
                  <span className="text-blue-50">OEM/ODM Customization Available</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded-3xl shadow-xl">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light text-gray-600 py-12 border-t border-gray-100 text-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <Image
                src="/jch_logo_blue.png"
                alt="JCH Auto, Inc."
                width={180}
                height={50}
                className="h-10 w-auto mb-2 object-contain"
              />
              <p className="max-w-md text-xs leading-relaxed opacity-80">
                A-1401, 136 LS-Ro, Dongan-Gu, Anyang-Si, Gyeonggi-Do, Republic of Korea<br />
                © 2025 SPERA Global. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex flex-wrap gap-x-6 gap-y-2 items-center text-text-sub font-medium">
                <a className="hover:text-primary transition-colors" href="#ai-functions">AI Features</a>
                <a className="hover:text-primary transition-colors" href="#view-modes">3D Experience</a>
                <a className="hover:text-primary transition-colors" href="#tech-specs">Tech Specs</a>
                <a className="hover:text-primary transition-colors" href="#inquiry">Inquiry</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
