import React, { useEffect, useState } from "react";
import aboutImage from "../assets/images/aboutusimage.jpeg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section relative bg-gradient-to-br from-[#0b1120] via-[#1c4e80] to-[#0b1120] text-white py-24 px-6 overflow-hidden">

        <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
            About Smart XML Solutions
          </h1>
          <p className="text-lg md:text-xl md:leading-relaxed text-blue-100 max-w-2xl mx-auto font-light">
            Empowering organizations with precise XML processing, content digitization, and future-ready data strategies.
          </p>
        </div>
      </section>

      {/* ================= STORY & IMAGE ================= */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1120] relative inline-block tracking-tight">
              Our Story
              <span className="absolute bottom-1 left-0 w-1/3 h-1.5 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              Smart XML Solutions was established to bridge the gap between unstructured legacy content and modern, reliable digital formats. From our inception, we have championed accuracy, consistency, and data usability.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg font-light">
              As the digital landscape evolved, so did we—developing deep expertise in XML standards, automated content validation, and large-scale digitization. Today, we serve sophisticated enterprises in publishing, finance, and healthcare.
            </p>

            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
                Learn more about our work
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* Image with fancy styles */}
          <div className={`relative group transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <img
              src={aboutImage}
              alt="Team collaboration"
              className="relative w-full rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01] z-10"
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="section-padding bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-100 premium-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm rotate-3 group-hover:rotate-12 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0b1120]">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-base font-light">
                To equip organizations with impeccably structured data, driving operational efficiency and system compatibility. We deliver dependable XML services that transform how businesses handle information.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 premium-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-sm -rotate-3 group-hover:-rotate-12 transition-transform">
                👁️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0b1120]">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-base font-light">
                To stand as the global benchmark for content digitization and XML processing—where clarity, structure, and long-term data value are the standards we set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="section-padding px-6 bg-[#0b1120] text-white overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeUp">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">The guiding principles that define our culture and commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality First", icon: "🛡️", desc: "Rigorous validation at every step ensuring 99.9% accuracy.", color: "from-blue-500 to-cyan-500" },
              { title: "Tech Excellence", icon: "⚡", desc: "Staying ahead with the latest XML schemas and processing tools.", color: "from-purple-500 to-pink-500" },
              { title: "Client Partnership", icon: "🤝", desc: "We don't just work for you; we work with you.", color: "from-orange-500 to-red-500" },
              { title: "Innovation", icon: "🔄", desc: "Continuous improvement of workflows for better efficiency.", color: "from-green-500 to-emerald-500" },
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 premium-card group animate-fadeUp" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE & STATS ================= */}
      <section className="section-padding px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Expertise List */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#0b1120] mb-6">Technical Expertise</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We leverage industry-leading tools and custom scripts to handle complex data transformation. Our stack ensures your content is future-proof and universally compatible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "XML/SGML Conversion",
                "XSLT Development",
                "Legacy Migration",
                "Batch Processing",
                "DTD/XSD Validation",
                "Automated QA",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Stats Bars */}
          <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-[60px] opacity-20"></div>

            <h3 className="text-xl font-semibold mb-6 relative z-10">Performance Metrics</h3>

            <div className="space-y-6 relative z-10">
              {[
                { label: "Accuracy Rate", width: "99.9%", val: "99.9%" },
                { label: "On-Time Delivery", width: "98%", val: "98%" },
                { label: "Client Retention", width: "97%", val: "97%" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1 text-sm font-medium text-gray-300">
                    <span>{stat.label}</span>
                    <span>{stat.val}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? stat.width : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-xs text-gray-400 italic">
                "Excellence is not an act, but a habit."
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
