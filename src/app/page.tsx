
import React from 'react';
import { Palette, PenTool, Image, Smile, Phone, MapPin, Instagram, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans selection:bg-[#FFD166] selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD166] rounded-full flex items-center justify-center transform -rotate-6 shadow-sm">
                <Palette size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black text-gray-800 tracking-tight">상상<span className="text-[#EF476F]">미술</span></span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-500">
              <a href="#about" className="hover:text-[#EF476F] transition-colors">우리 학원</a>
              <a href="#curriculum" className="hover:text-[#06D6A0] transition-colors">커리큘럼</a>
              <a href="#gallery" className="hover:text-[#118AB2] transition-colors">갤러리</a>
              <a href="#contact" className="hover:text-[#FFD166] transition-colors">상담문의</a>
            </div>
            <button className="hidden md:block bg-[#EF476F] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#D63C60] transition-colors shadow-lg shadow-pink-200 hover:shadow-pink-300 transform hover:-translate-y-0.5">
              체험수업 신청
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 animate-fade-in-up order-2 lg:order-1">
            <div className="inline-block bg-[#FFD166]/20 text-[#FFD166] px-5 py-2 rounded-full text-base font-bold tracking-wide shadow-sm">
              🎨 창의력이 쑥쑥 자라나요!
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight">
              아이들의 <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#EF476F] to-[#FFD166]">상상력</span>
                <span className="absolute bottom-3 left-0 w-full h-6 bg-[#06D6A0]/20 -z-0 rounded-full transform -rotate-2"></span>
              </span>을 <br/>
              그리는 공간
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-lg font-medium">
              틀에 박힌 그림이 아닌, <span className="text-gray-800 font-bold underline decoration-[#118AB2]/30 decoration-4">아이들만의 이야기</span>를 담아냅니다.
              다양한 재료와 기법으로 표현의 즐거움을 선물해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="px-10 py-5 bg-[#118AB2] hover:bg-[#0E7699] text-white rounded-full font-bold text-xl transition-all shadow-xl shadow-blue-200 transform hover:scale-105 hover:-translate-y-1">
                상담 예약하기
              </button>
              <button className="px-10 py-5 bg-white border-2 border-gray-100 hover:border-[#118AB2] hover:text-[#118AB2] text-gray-500 rounded-full font-bold text-xl transition-all shadow-sm hover:shadow-md">
                작품 보러가기
              </button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF476F]/10 rounded-full blur-3xl -z-10 animate-blob mix-blend-multiply filter blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#118AB2]/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFD166]/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl"></div>
            
            <div className="grid grid-cols-2 gap-6 md:gap-8 transform hover:scale-[1.02] transition-transform duration-700">
              <div className="space-y-6 md:space-y-8 mt-12 md:mt-16">
                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" className="rounded-3xl shadow-2xl w-full h-56 md:h-72 object-cover transform hover:rotate-2 transition-transform duration-500 hover:shadow-[#EF476F]/20" alt="Art Class 1"/>
                <img src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl w-full h-72 md:h-96 object-cover transform hover:-rotate-2 transition-transform duration-500 hover:shadow-[#118AB2]/20" alt="Art Class 2"/>
              </div>
              <div className="space-y-6 md:space-y-8">
                <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl w-full h-72 md:h-96 object-cover transform hover:rotate-1 transition-transform duration-500 hover:shadow-[#FFD166]/20" alt="Art Class 3"/>
                <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl w-full h-56 md:h-72 object-cover transform hover:-rotate-1 transition-transform duration-500 hover:shadow-[#06D6A0]/20" alt="Art Class 4"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD166] rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#EF476F] rounded-full opacity-20 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">다채로운 커리큘럼</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">연령별, 수준별 맞춤 수업으로 기초부터 탄탄하게! <br/>아이들의 눈높이에 맞춘 즐거운 미술 교육을 지향합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {[
              { title: "유치부 (5-7세)", desc: "오감 발달과 창의력 중심의 즐거운 미술 놀이", icon: Smile, color: "bg-[#FFD166]", text: "text-yellow-800" },
              { title: "초등부 (8-13세)", desc: "다양한 기법 탐구와 표현력 향상, 교과 연계", icon: PenTool, color: "bg-[#06D6A0]", text: "text-green-800" },
              { title: "중고등/취미반", desc: "심화 실기, 포트폴리오, 수행평가 대비", icon: Image, color: "bg-[#118AB2]", text: "text-blue-800" },
            ].map((cls, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-xl border-4 border-transparent hover:border-gray-100 transition-all group hover:-translate-y-2">
                <div className={`w-20 h-20 ${cls.color} rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-inner`}>
                  <cls.icon size={32} className="text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${cls.text}`}>{cls.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{cls.desc}</p>
                <div className="mt-6 flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500">#창의력</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500">#표현력</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section id="gallery" className="py-24 bg-[#FFF0F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">이달의 꼬마 작가님</h2>
              <p className="text-gray-600">아이들의 순수한 시선이 담긴 작품들을 감상해보세요.</p>
            </div>
            <button className="hidden sm:block text-[#EF476F] font-bold hover:underline">
              전체 갤러리 보기 &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-md rotate-1 hover:rotate-0 transition-transform duration-300 transform hover:scale-105 cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                  <img src={`https://source.unsplash.com/random/400x400?art,kids,drawing&sig=${i}`} alt={`Artwork ${i}`} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="font-bold text-gray-800 text-sm">김지우 (7세)</span>
                  <span className="text-xs text-gray-400">2024.02</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Map */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#118AB2] rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full transform -translate-x-10 translate-y-10"></div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-6">그림 그리는 즐거움을 선물하세요!</h2>
            <p className="text-blue-100 mb-10 text-lg">
              처음 방문하시는 분들을 위해 <span className="font-bold text-yellow-300">무료 체험 수업</span>을 진행하고 있습니다.<br/>
              편하게 문의주시면 친절하게 안내해 드리겠습니다.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
               <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                 <Phone size={24} className="text-[#FFD166]" />
                 <div className="text-left">
                   <div className="text-xs text-blue-200 uppercase tracking-wide">Call Us</div>
                   <div className="font-bold text-xl">02-1234-5678</div>
                 </div>
               </div>
               <div className="flex items-center justify-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                 <MapPin size={24} className="text-[#FFD166]" />
                 <div className="text-left">
                   <div className="text-xs text-blue-200 uppercase tracking-wide">Location</div>
                   <div className="font-bold text-xl">서초구 반포동 123</div>
                 </div>
               </div>
            </div>
            
            <button className="bg-white text-[#118AB2] px-10 py-4 rounded-full font-black text-lg hover:bg-gray-100 transition-colors shadow-lg">
              상담 신청하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <Palette size={16} className="text-gray-500" />
            </div>
            <span className="text-xl font-bold text-gray-400">상상미술학원</span>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-[#EF476F]"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-[#06D6A0]"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" className="w-6 h-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all" alt="Kakao" /></a>
          </div>
          <p className="text-gray-400 text-sm">
            서울특별시 서초구 반포대로 123 상상빌딩 2층 | 대표: 김미술 | 사업자등록번호: 123-45-67890<br/>
            Copyright &copy; 2024 SangSang Art Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
