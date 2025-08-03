import { Search, MapPin, Briefcase, ClockFading } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen gradient-background flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl text-center">
        {/* Main Headline */}
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold font-cairo text-foreground mb-8 leading-tight">
            صياد الوظائف
            <span className="block text-primary mt-2">
              دور علي فرصو عمل مناسبة في وقت قصير!
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            ابحث في آلاف الوظائف من أفضل المواقع المصرية في مكان واحد، وخلاص
            هتوفر وقتك وتركز على اللي مهم فعلاً
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-3xl mx-auto bg-gray-200 border border-gray-300 shadow-xs rounded-2xl p-8 fade-in">
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-6">
            {/* Job Track */}
            <div
              className={
                "w-fit h-12 flex items-center justify-start gap-1.5 pe-2 border text-gray-700 bg-gray-300 border-gray-200 rounded3sm focus-within:bg-gray-100 focus-within:border-gray-400"
              }
            >
              <input
                type="search"
                name="track"
                id="track"
                placeholder="إيه المجال اللي بتدور عليه؟"
                className={
                  "pe-1 ps-3 py-2 rounded-sm bg-inherit placeholder:text-gray-400 text-gray-700 text-start focus:outline-none"
                }
              />
              <Briefcase className="size-5" />
            </div>
            {/* Location */}
            <div
              className={
                "w-fit h-12 flex items-center justify-start gap-1.5 pe-2 border text-gray-700 border-gray-300 rounded-sm bg-gray-300 focus-within:bg-gray-100 focus-within:border-gray-400"
              }
            >
              <input
                type="search"
                name="location"
                id="location"
                placeholder="المكان ( عن بعد ,الأسكندرية,القاهرة )"
                className={
                  "pe-1 ps-3 py-2 rounded-sm bg-inherit placeholder:text-gray-400 text-gray-700 text-start focus:outline-none"
                }
              />
              <MapPin className="size-5 text-brand" />
            </div>

            {/* Job Type */}
            <div
              className={
                "w-fit h-12 flex items-center justify-start gap-1.5 pe-2 border text-gray-700 border-gray-300 rounded-sm bg-gray-300 focus-within:bg-gray-100 focus-within:border-gray-400"
              }
            >
              <input
                type="search"
                name="job-type"
                id="job-type"
                placeholder="نوع العقد ( دوام كامل , جزئي )"
                className={
                  "pe-1 ps-3 py-2 rounded-sm bg-inherit placeholder:text-gray-400 text-gray-700 text-start focus:outline-none"
                }
              />
              <ClockFading className="size-5 text-brand" />
            </div>
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="w-full md:w-auto flex items-center justify-center py-3 rounded-sm mx-auto min-w-[220px] cursor-pointer bg-sky-600 text-white hover:bg-sky-700"
          >
            <Search className="ml-2 h-6 w-6" />
            يلا نبدأ الرحلة! 🚀
          </button>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">وظيفة متاحة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">شركة بتثق فينا</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mint mb-2">95%</div>
            <div className="text-muted-foreground">معدل نجاح عالي</div>
          </div>
        </div>
      </div>
    </section>
  );
}
