"use client";

import Image from "next/image";
import {
  Bell, MessageCircle, Users, Briefcase, Home, Search, Plus, ChevronDown,
  MapPin, Verified, Edit3, ExternalLink
} from "lucide-react";

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

function PillButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full text-sm">
      {children}
    </button>
  );
}

function BlueButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm">
      {children}
    </button>
  );
}

export default function LinkedInProfile() {
  return (
    <div className="min-h-screen">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 rounded-sm p-1 w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-sm bg-blue-50 text-sm w-64"
                />
              </div>
            </div>
            <nav className="flex items-center space-x-8">
              {[
                { Icon: Home, label: "Home" },
                { Icon: Users, label: "My Network", dot: true },
                { Icon: Briefcase, label: "Jobs" },
                { Icon: MessageCircle, label: "Messaging", dot: true },
                { Icon: Bell, label: "Notifications", dot: true },
              ].map(({ Icon, label, dot }) => (
                <div key={label} className="relative flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                  <Icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{label}</span>
                  {dot && <div className="absolute right-0 -top-1 w-2 h-2 bg-red-500 rounded-full" />}
                </div>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <Image src="/images/francis-seow.jpg" alt="Profile" width={32} height={32} className="w-full h-full object-cover" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left / center column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Profile header */}
            <SectionCard>
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src={"/images/king-cobra-banner.webp"}
                  alt="King cobra banner"
                  fill
                  className="object-cover"
                  priority
                  onError={() => {}}
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-lg font-bold text-gray-800">Seow-Choen Colorectal Centre</div>
                    <div className="text-sm text-gray-600">Excellence in Colorectal Care</div>
                  </div>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                  <Edit3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="px-6 pb-6">
                <div className="relative -mt-16 mb-4">
                  <div className="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                    <Image
                      src="/images/francis-seow.jpg"
                      alt="Dr. Francis Seow Choen"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-semibold text-gray-900">Dr. Francis Seow Choen MBBS, FRCS, FAMS, FRES</h1>
                    <Verified className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Medical Director & Senior Consultant, Seow-Choen Colorectal Centre | International Colorectal Surgery Pioneer | FRES | Wildlife Photographer
                  </p>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">Singapore · <a href="#" className="text-blue-600 hover:underline">Contact info</a></span>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">500+ connections</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <BlueButton>Open to</BlueButton>
                  <PillButton>Add profile section</PillButton>
                  <PillButton>Add custom button</PillButton>
                  <PillButton>Resources</PillButton>
                </div>
              </div>
            </SectionCard>

            {/* About */}
            <SectionCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-700 leading-7">
                I am Dr. Francis Seow Choen, Medical Director and Senior Consultant specialising in colorectal surgery at Seow-Choen Colorectal Centre, and former Head of the
                Colorectal Surgery Department at Singapore General Hospital.
                <br /><br />
                Over the past three decades, I have pioneered minimally invasive colorectal surgery in Asia, trained hundreds of surgeons worldwide, and published over
                260 peer‑reviewed papers and 39 textbook chapters. I've served as President of the Asian Federation of Coloproctology and the Eurasian Colorectal Technology
                Association, and I hold honorary fellowships across multiple continents.
                <br /><br />
                Outside the operating theatre, I am a passionate naturalist. A Fellow of the Royal Entomological Society, I have authored several definitive guides to the
                stick insects of Southeast Asia. More recently, I have developed a fascination with the snakes of the world — from photographing king cobras in India to studying
                regional reptile biodiversity.
                <br /><br />
                On LinkedIn, I share insights on surgical innovation, healthcare leadership, biodiversity, and adventure travel. My aim is to connect with professionals and
                enthusiasts who share a passion for saving lives — whether human or animal.
              </p>
            </SectionCard>

            {/* Featured */}
            <SectionCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Featured</h3>
                <button className="text-sm text-gray-500 hover:text-gray-700">Manage</button>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Seow-Choen Colorectal Centre profile",
                    href: "https://www.colorectalcentre.com/eng/profile/about-prof-seow.html",
                  },
                  {
                    title: "NUS LKC Natural History Museum interview",
                    href: "https://lkcnhm.nus.edu.sg/specialist-surgeon-by-day-expert-entomologist-by-night-an-interview-with-dr-francis-seow-choen/",
                  },
                  {
                    title: "WJG Surgery Editorial Board profile",
                    href: "https://www.wjgnet.com/1948-9366/MemberDetail/60bb8eb2-ad08-4eb0-98aa-f8e75ac8781a",
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block border rounded-lg overflow-hidden hover:shadow transition"
                  >
                    <div className="h-36 bg-gray-100 relative">
                      <Image src="/images/king-cobra-banner.webp" alt="Featured" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                    <div className="p-3">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium text-gray-900 text-sm leading-5">{item.title}</p>
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-blue-600 mt-1 truncate">{item.href}</p>
                    </div>
                  </a>
                ))}
              </div>
            </SectionCard>

            {/* Experience */}
            <SectionCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Medical Director & Senior Consultant</h4>
                  <p className="text-sm text-gray-600">Seow-Choen Colorectal Centre · Singapore</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm space-y-1">
                    <li>Founded Singapore's first dedicated colorectal unit</li>
                    <li>Leads advanced laparoscopic and robotic procedures</li>
                    <li>Trains specialists regionally; international referrals</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Head of Department – Colorectal Surgery</h4>
                  <p className="text-sm text-gray-600">Singapore General Hospital</p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm space-y-1">
                    <li>Established Asia's first colorectal department</li>
                    <li>Expanded national and regional surgical education</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Adjunct/Visiting Professor – Various Institutions</h4>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm space-y-1">
                    <li>Lectured internationally; training programs in China, Europe & Australasia</li>
                  </ul>
                </div>
              </div>
            </SectionCard>

            {/* Education */}
            <SectionCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education & Credentials</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>MBBS, National University of Singapore</li>
                <li>FRCS (Edinburgh)</li>
                <li>FAMS (Singapore)</li>
                <li>Fellow of the Royal Entomological Society (FRES, UK)</li>
              </ul>
            </SectionCard>

            {/* Skills */}
            <SectionCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Colorectal Surgery",
                  "Surgical Oncology",
                  "Minimally Invasive Surgery",
                  "Robotic Surgery",
                  "Medical Education",
                  "Wildlife Photography",
                  "Taxonomy & Entomology",
                ].map((s) => (
                  <span key={s} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{s}</span>
                ))}
              </div>
            </SectionCard>

            {/* Activity */}
            <SectionCard className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
                <a className="text-sm text-blue-600" href="#" onClick={(e) => e.preventDefault()}>See all</a>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  { title: "Insights from 30 Years of Colorectal Surgery", img: "/images/king-cobra-banner.webp" },
                  { title: "Singapore's Battle Against Colorectal Cancer", img: "/images/king-cobra-banner.webp" },
                  { title: "Wild Encounters: Photographing King Cobras in India", img: "/images/king-cobra-banner.webp" },
                  { title: "Biodiversity & Surgery: What Nature Can Teach Us", img: "/images/king-cobra-banner.webp" },
                ].map((p) => (
                  <div key={p.title} className="border rounded-lg overflow-hidden hover:shadow transition">
                    <div className="h-32 relative bg-gray-100">
                      <Image src={p.img} alt="" fill className="object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-gray-900 text-sm">{p.title}</p>
                      <p className="text-xs text-gray-500 mt-1">Preview post</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Recommendations */}
            <SectionCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommendations</h3>
              <p className="text-sm text-gray-600">Recommendations will appear here once colleagues and trainees submit them.</p>
            </SectionCard>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <SectionCard className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Public profile & URL</h4>
                <Edit3 className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600">www.linkedin.com/in/dr-francis-seow-choen</p>
            </SectionCard>

            <SectionCard className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Profile language</h4>
                <Edit3 className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-sm text-gray-600">English</p>
            </SectionCard>

            <SectionCard className="p-4">
              <h4 className="font-medium text-gray-900 mb-3">People also viewed</h4>
              {[1,2,3].map((i) => (
                <div key={i} className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Senior Colorectal Surgeon</p>
                    <p className="text-xs text-gray-600">Asia-Pacific</p>
                    <button className="mt-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">View</button>
                  </div>
                </div>
              ))}
              <button className="w-full mt-2 text-center text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 py-2 rounded">
                Show all
              </button>
            </SectionCard>

            <SectionCard className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">Follow Dr. Seow Choen</h4>
                  <p className="text-xs text-gray-600">Updates on surgery & wildlife</p>
                </div>
              </div>
              <button className="w-full bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300 rounded py-2">
                Follow
              </button>
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}