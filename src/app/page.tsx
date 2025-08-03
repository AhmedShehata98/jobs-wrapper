import { Card, CardContent } from "@/components/ui/card";
import { Zap, Filter, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import HeroTrackSearchBox from "@/components/HeroTrackSearchBox";

export default function JobHunterLanding() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Find Your Dream
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Software Engineering Job
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Search all leading job boards in one place and find the
                opportunity that matches your skills and ambitions.
              </p>
            </div>

            {/* Animated Illustration Placeholder */}
            <div className="mb-12">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-center">
                <Image
                  src={"/undraw_career-progress_vfq5.svg"}
                  width={512}
                  height={512}
                  className="w-full object-cover"
                  alt="undraw_career-progress_vfq5.svg"
                />
              </div>
            </div>

            {/* Search Form */}
            <HeroTrackSearchBox />

            {/* Stats - Removed as per PRD, but keeping for now if needed later */}
            {/*
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-600">Jobs Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Job Boards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  5,000+
                </div>
                <div className="text-gray-600">Happy Developers</div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Job Tracker?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide you with the tools and features you need to find your
              dream job easily and quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="premium-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ultra-Fast Search
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Search dozens of sites in mere seconds and get the most
                  relevant results.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Filter className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Smart Filtering
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Filter results by specialization, location, salary, and job
                  type with high accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Global & Local Opportunities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Find remote job opportunities and local jobs in one place.
                </p>
              </CardContent>
            </Card>

            <Card className="premium-card p-8 text-center group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Excellent User Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  An easy-to-use interface that works seamlessly on all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Search the Best Sites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We connect to the most famous job sites in the world and the
              region to bring you the latest job opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto gap-8">
            {[
              { name: "CodeZella", color: "from-blue-800 to-blue-900" },
              { name: "Glassdoor", color: "from-emerald-600 to-green-700" },
              { name: "Bayt", color: "from-sky-400 to-sky-500" },
              { name: "Wuzzuf", color: "from-blue-600 to-blue-700" },
            ].map((site) => (
              <div
                key={site.name}
                className={`flex-1/5 p-6 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${site.color}`}
              >
                {site.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
//   Search,
//   Zap,
//   Filter,
//   Globe,
//   Smartphone,
//   Briefcase,
//   MapPin,
//   Star,
//   Users,
//   Clock,
//   Shield,
// } from "lucide-react";
// import Link from "next/link";

// export default function JobHunterLanding() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="mb-8">
//               <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight arabic-text">
//                 اعثر على وظيفة
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
//                   مهندس السوفت وير المناسبة
//                 </span>
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto arabic-text">
//                 ابحث في جميع مواقع التوظيف الرائدة في مكان واحد واعثر على الفرصة
//                 التي تناسب مهاراتك وطموحاتك
//               </p>
//             </div>

//             {/* Search Form */}
//             <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 block arabic-text">
//                     التخصص
//                   </label>
//                   <input
//                     type="search"
//                     placeholder="Frontend, Backend, Full Stack"
//                     className="premium-input h-14 text-lg"
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 block arabic-text">
//                     الموقع
//                   </label>
//                   <Input
//                     placeholder="ريموت، القاهرة، الإسكندرية"
//                     className="premium-input h-14 text-lg"
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-sm font-semibold text-gray-700 block arabic-text">
//                     نوع العمل
//                   </label>
//                   <select>
//                     <SelectTrigger className="premium-input h-14 text-lg">
//                       <SelectValue placeholder="اختر نوع العمل" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="fulltime">دوام كامل</SelectItem>
//                       <SelectItem value="parttime">دوام جزئي</SelectItem>
//                       <SelectItem value="contract">عقد مؤقت</SelectItem>
//                       <SelectItem value="freelance">عمل حر</SelectItem>
//                     </SelectContent>
//                   </select>
//                 </div>
//               </div>
//               <Button
//                 size="lg"
//                 className="w-full md:w-auto px-8 py-4 text-lg h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 shadow-lg"
//               >
//                 <Search className="w-5 h-5 mr-3" />
//                 Start Tracking
//               </Button>
//             </div>

//             {/* Stats - Removed as per PRD, but keeping for now if needed later */}
//             {/*
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">
//                   10,000+
//                 </div>
//                 <div className="text-gray-600">Jobs Available</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-indigo-600 mb-2">
//                   50+
//                 </div>
//                 <div className="text-gray-600">Job Boards</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-600 mb-2">
//                   5,000+
//                 </div>
//                 <div className="text-gray-600">Happy Developers</div>
//               </div>
//             </div>
//             */}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
//               لماذا Job Hunter؟
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed arabic-text">
//               نحن نقدم لك الأدوات والميزات التي تحتاجها للعثور على وظيفة أحلامك
//               بسهولة وسرعة
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="premium-card p-8 text-center group">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Zap className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 arabic-text">
//                   بحث فائق السرعة
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed arabic-text">
//                   ابحث في عشرات المواقع في ثوانٍ معدودة واحصل على النتائج الأكثر
//                   صلة
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="premium-card p-8 text-center group">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Filter className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 arabic-text">
//                   فلترة ذكية
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed arabic-text">
//                   رشح النتائج حسب التخصص والموقع والراتب ونوع العمل بدقة عالية
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="premium-card p-8 text-center group">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Globe className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 arabic-text">
//                   فرص عالمية ومحلية
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed arabic-text">
//                   اعثر على فرص العمل عن بُعد والوظائف المحلية في مكان واحد
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="premium-card p-8 text-center group">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Smartphone className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 arabic-text">
//                   تجربة متميزة
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed arabic-text">
//                   واجهة سهلة الاستخدام تعمل بسلاسة على جميع الأجهزة
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Websites Section */}
//       <section id="websites" className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
//               نبحث في أفضل المواقع
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed arabic-text">
//               نتصل بأشهر مواقع التوظيف في العالم والمنطقة لنجلب لك أحدث الفرص
//               الوظيفية
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//             {[
//               { name: "LinkedIn", color: "from-blue-600 to-blue-700" },
//               { name: "Wuzzuf", color: "from-green-600 to-green-700" },
//               { name: "Forasna", color: "from-purple-600 to-purple-700" },
//               { name: "Glassdoor", color: "from-teal-600 to-teal-700" },
//               {
//                 name: "Stack Overflow",
//                 color: "from-orange-600 to-orange-700",
//               },
//             ].map((site, index) => (
//               <Card
//                 key={index}
//                 className="premium-card p-6 text-center group hover:scale-105 transition-all duration-300"
//               >
//                 <CardContent className="p-0">
//                   <div
//                     className={`w-12 h-12 bg-gradient-to-r ${site.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
//                   >
//                     <Briefcase className="w-6 h-6 text-white" />
//                   </div>
//                   <span className="text-gray-900 font-semibold">
//                     {site.name}
//                   </span>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 arabic-text">
//               ماذا يقول المطورون؟
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             <Card className="premium-card p-8">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 leading-relaxed arabic-text">
//                   "Job Hunter وفر عليّ ساعات من البحث. لقيت شغل أحلامي في أسبوع
//                   واحد!"
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
//                     <Users className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="mr-4">
//                     <div className="font-semibold text-gray-900 arabic-text">
//                       أحمد محمد
//                     </div>
//                     <div className="text-gray-500 text-sm arabic-text">
//                       مطور Frontend
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="premium-card p-8">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 leading-relaxed arabic-text">
//                   "الموقع سهل جداً والنتائج دقيقة. أنصح كل مطور يستخدمه."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                     <Users className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="mr-4">
//                     <div className="font-semibold text-gray-900 arabic-text">
//                       فاطمة علي
//                     </div>
//                     <div className="text-gray-500 text-sm arabic-text">
//                       مطورة Full Stack
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="premium-card p-8">
//               <CardContent className="p-0">
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 mb-6 leading-relaxed arabic-text">
//                   "أفضل أداة للبحث عن وظائف البرمجة. النتائج محدثة باستمرار."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center">
//                     <Users className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="mr-4">
//                     <div className="font-semibold text-gray-900 arabic-text">
//                       محمد حسن
//                     </div>
//                     <div className="text-gray-500 text-sm arabic-text">
//                       مطور Backend
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
//         <div className="container mx-auto px-6 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 arabic-text">
//               ابدأ رحلتك المهنية اليوم
//             </h2>
//             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed arabic-text">
//               انضم إلى آلاف المطورين الذين وجدوا وظائف أحلامهم من خلال Job
//               Hunter
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Button
//                 size="lg"
//                 className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg arabic-text"
//               >
//                 <Search className="w-6 h-6 ml-3" />
//                 ابدأ البحث مجاناً
//               </Button>
//               <div className="flex items-center text-blue-100">
//                 <Shield className="w-5 h-5 ml-2" />
//                 <span className="text-sm arabic-text">
//                   مجاني 100% - لا توجد رسوم خفية
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//             <div className="md:col-span-2">
//               <div className="flex items-center space-x-3 space-x-reverse mb-6">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//                   <Search className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold text-white arabic-text">
//                   Job Hunter
//                 </span>
//               </div>
//               <p className="text-gray-400 leading-relaxed max-w-md arabic-text">
//                 منصة ذكية تساعد المطورين في العثور على أفضل الفرص الوظيفية من
//                 خلال البحث في عشرات مواقع التوظيف الرائدة في مكان واحد.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-white font-bold mb-6 arabic-text">
//                 روابط سريعة
//               </h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     عن Job Hunter
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     كيف يعمل
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     الأسعار
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     المدونة
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white font-bold mb-6 arabic-text">الدعم</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     تواصل معنا
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     الأسئلة الشائعة
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     سياسة الخصوصية
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors arabic-text"
//                   >
//                     شروط الاستخدام
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm arabic-text">
//               © {new Date().getFullYear()} Job Hunter. جميع الحقوق محفوظة.
//             </p>
//             <div className="flex items-center space-x-6 space-x-reverse mt-4 md:mt-0">
//               <div className="flex items-center text-gray-400 text-sm">
//                 <Clock className="w-4 h-4 ml-2" />
//                 <span className="arabic-text">متاح 24/7</span>
//               </div>
//               <div className="flex items-center text-gray-400 text-sm">
//                 <MapPin className="w-4 h-4 ml-2" />
//                 <span className="arabic-text">القاهرة، مصر</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
