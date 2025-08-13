import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bell,
  MessageCircle,
  Users,
  Briefcase,
  Home,
  Search,
  Plus,
  ChevronDown,
  MapPin,
  Verified,
  Edit3
} from 'lucide-react';

export default function LinkedInProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 rounded-sm p-1 w-8 h-8 flex items-center justify-center">
                <span className="text-white font-bold text-lg">in</span>
              </div>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-sm bg-blue-50 text-sm w-64"
                />
              </div>
            </div>
            <nav className="flex items-center space-x-8">
              <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                <Home className="w-6 h-6" />
                <span className="text-xs mt-1">Home</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                <Users className="w-6 h-6" />
                <span className="text-xs mt-1">My Network</span>
                <div className="w-2 h-2 bg-red-500 rounded-full -mt-1 ml-4"></div>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                <Briefcase className="w-6 h-6" />
                <span className="text-xs mt-1">Jobs</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs mt-1">Messaging</span>
                <div className="w-2 h-2 bg-red-500 rounded-full -mt-1 ml-4"></div>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
                <Bell className="w-6 h-6" />
                <span className="text-xs mt-1">Notifications</span>
                <div className="w-2 h-2 bg-red-500 rounded-full -mt-1 ml-4"></div>
              </div>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/images/francis-seow.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: "url('https://cdn.abacus.ai/images/c7e9fce9-7585-496d-9ff3-7f7a64670323.png')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-lg font-bold text-gray-800">
                      Seow-Choen Colorectal Centre
                    </div>
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
                      alt="Prof. Francis Seow-Choen"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full border border-gray-300 shadow-sm hover:bg-gray-50">
                    <Edit3 className="w-3 h-3 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-semibold text-gray-900">
                      Prof. Francis Seow-Choen MBBS, FRCS, FAMS, FRES
                    </h1>
                    <Verified className="w-5 h-5 text-blue-600 fill-current" />
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Medical Director & Senior Consultant, Seow-Choen Colorectal Centre | International Colorectal Surgery Pioneer | FRES | Wildlife Photographer
                  </p>
                  
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Singapore</span>
                  </div>
                  
                  <div className="text-sm text-blue-600 font-medium">
                    500+ connections
                  </div>
                </div>

                <div className="mt-4 mb-6">
                  <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1">
                    Open to work
                  </Badge>
                  <p className="text-sm text-gray-600 mt-1">
                    Medical Consultation, Research Collaboration, and Speaking Opportunities
                  </p>
                  <button className="text-sm text-blue-600 hover:underline mt-1">
                    See all details
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                    Open to
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full">
                    Add profile section
                  </Button>
                  <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full">
                    Add custom button
                  </Button>
                  <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full">
                    Resources
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Suggested for you</h3>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  View all
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      Connect with a Regional Business Development Manager to advance your career goals
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Find connections that can help elevate your professional opportunities.
                    </p>
                    <button className="text-sm text-blue-600 hover:underline mt-2">
                      Search for people
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Plus className="w-5 h-5 rotate-45" />
                  </button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Profile language</h4>
                <button>
                  <Edit3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <p className="text-sm text-gray-600">English</p>
            </Card>

            <Card className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Public profile & URL</h4>
                <button>
                  <Edit3 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                www.linkedin.com/in/prof-francis-seow-choen
              </p>
            </Card>

            <Card className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">M Chandra, trailing consultant</h4>
                  <p className="text-xs text-gray-600">Opportunities from conference</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Get 10x more profile visits and industry news
              </p>
              <Button className="w-full bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300">
                Follow
              </Button>
            </Card>

            <Card className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h4 className="font-medium text-gray-900 mb-4">Who your viewers also viewed</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-medium text-sm">RC</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 text-sm">Someone at National University of</h5>
                    <p className="text-xs text-gray-600">Singapore</p>
                    <Button size="sm" className="mt-2 text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700">
                      View
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-700 font-medium text-sm">SM</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 text-sm">Someone at Pan-Malaysian Pharmaceuticals</h5>
                    <p className="text-xs text-gray-600">Specialist at CSL</p>
                    <Button size="sm" className="mt-2 text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700">
                      View
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-medium text-sm">AB</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 text-sm">Someone at National University of</h5>
                    <p className="text-xs text-gray-600">Singapore</p>
                    <Button size="sm" className="mt-2 text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700">
                      View
                    </Button>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 text-center text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 py-2 rounded">
                Show all 10 viewers
              </button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}