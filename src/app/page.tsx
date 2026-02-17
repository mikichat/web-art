
import React from 'react';
import { Palette, PenTool, Image, Sparkles, MapPin, Phone, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans selection:bg-[#FFD166] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD166] rounded-[1rem] rotate-3 flex items-center justify-center shadow-md">
                <Palette size={20} className="text-white -rotate-3" />
              </div>
              <span className="text-2xl font-black text-gray-800 tracking-tight ml-2">
                ART<span className="text-[#EF476F]">PLAY</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-500">
              <a href="#" className="hover:text-[#EF476F] transition-colors">Studio</a>
              <a href="#class" className="hover:text-[#06D6A0] transition-colors">Class</a>
              <a href="#gallery" className="hover:text-[#118AB2] transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-[#FFD166] transition-colors">Contact</a>
            </div>
            <button className="hidden md:block bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#EF476F] transition-colors shadow-lg shadow-gray-200">
              체험수업 신청 🎨
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
            <div className="inline-block bg-white border-2 border-[#FFD166] text-[#FFD166] px-4 py-1 rounded-full text-sm font-black mb-6 transform -rotate-2 shadow-sm">
              ✨ 창의력이 쑥쑥 자라나요!
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight mb-8">
              DRAW <br/>
              YOUR <br/>
              <span className="text-[#EF476F] inline-block transform hover:scale-110 hover:rotate-3 transition-transform cursor-default">DREAM</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              아이들의 엉뚱한 상상이 멋진 작품이 되는 곳.<br/>
              틀에 박힌 그림이 아닌, 나만의 세상을 표현합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-[#118AB2] text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-[#118AB2]/30 hover:-translate-y-1 transition-transform">
                상담 예약하기
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-500 rounded-[2rem] font-bold text-lg hover:border-[#FFD166] hover:text-[#FFD166] transition-colors">
                갤러리 구경하기
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[#EF476F]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-xl translate-y-8 border-4 border-white" />
              <img src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-xl border-4 border-white" />
              <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-xl translate-y-8 border-4 border-white" />
              <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=2070&auto=format&fit=crop" className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-xl border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section id="class" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">다채로운 커리큘럼</h2>
            <div className="w-20 h-2 bg-[#FFD166] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "KIDS ART", sub: "5-7세 유치부", desc: "오감발달과 창의력 중심의 미술놀이", color: "bg-[#FFD166]", text: "text-yellow-900", rotate: "-rotate-1" },
              { title: "JUNIOR", sub: "8-13세 초등부", desc: "다양한 기법 탐구와 표현력 향상", color: "bg-[#06D6A0]", text: "text-green-900", rotate: "rotate-1" },
              { title: "HOBBY", sub: "중고등/취미반", desc: "나만의 취미를 찾는 힐링 미술 시간", color: "bg-[#118AB2]", text: "text-blue-900", rotate: "-rotate-1" },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-[2.5rem] ${item.color} ${item.rotate} hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer group`}>
                <div className="bg-white/40 w-16 h-16 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white transition-colors">
                  <Sparkles className={item.text} />
                </div>
                <h3 className={`text-3xl font-black mb-2 ${item.text}`}>{item.title}</h3>
                <p className={`font-bold mb-4 opacity-70 ${item.text}`}>{item.sub}</p>
                <p className={`font-medium ${item.text} leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Marquee */}
      <section id="gallery" className="py-20 bg-[#fffdf5] overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-[#EF476F] font-bold tracking-widest uppercase">Hall of Fame</span>
          <h2 className="text-3xl font-black mt-2">이달의 꼬마 작가님</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-10 px-4 snap-x">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="min-w-[280px] bg-white p-3 rounded-2xl shadow-md snap-center transform hover:-translate-y-2 transition-transform">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3">
                <img src={`https://source.unsplash.com/random/400x400?drawing,art&sig=${i}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="font-bold text-gray-800">김지우 (7세)</span>
                <span className="text-xs text-gray-400">2024.02</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-300 mb-8">ARTPLAY STUDIO</h2>
          <div className="flex justify-center gap-8 mb-8 text-gray-400 font-bold text-sm">
            <a href="#" className="hover:text-[#EF476F] transition-colors flex items-center gap-2"><Instagram size={18}/> @artplay_official</a>
            <a href="#" className="hover:text-[#118AB2] transition-colors flex items-center gap-2"><Phone size={18}/> 02-1234-5678</a>
            <a href="#" className="hover:text-[#06D6A0] transition-colors flex items-center gap-2"><MapPin size={18}/> 서울시 서초구 반포동</a>
          </div>
          <p className="text-xs text-gray-300">
            Copyright © 2024 ArtPlay Studio. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
