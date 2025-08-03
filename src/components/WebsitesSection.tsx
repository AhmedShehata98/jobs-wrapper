const jobSites = [
    {
        name: "وظف",
        logo: "🎯",
        description: "أكبر موقع وظائف في مصر"
    },
    {
        name: "فورس",
        logo: "💼",
        description: "وظائف تقنية ومهنية"
    },
    {
        name: "خمسات",
        logo: "⭐",
        description: "فرص عمل حر"
    },
    {
        name: "لينكد إن",
        logo: "🔗",
        description: "شبكة مهنية عالمية"
    },
    {
        name: "بيت.كوم",
        logo: "🏢",
        description: "وظائف في الشرق الأوسط"
    },
    {
        name: "أكبر",
        logo: "🚀",
        description: "وظائف حديثة وشركات ناشئة"
    },
    {
        name: "جلف تالنت",
        logo: "🌟",
        description: "وظائف دولية"
    },
    {
        name: "درة",
        logo: "💎",
        description: "وظائف حكومية وخاصة"
    }
];

const WebsitesSection = () => {
    return (
        <section className="py-20 px-4 gradient-background">
            <div className="container max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold font-cairo text-foreground mb-6">
                        بندور لك في كل مكان!
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        متصلين مع أفضل مواقع التوظيف في مصر والشرق الأوسط عشان نجيب لك كل الفرص المتاحة
                    </p>
                </div>

                {/* Websites Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {jobSites.map((site, index) => (
                        <div
                            key={index}
                            className="shadow-card border-0 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-smooth hover-bounce group cursor-pointer"
                        >
                            <div className="p-6 text-center">
                                {/* Logo */}
                                <div className="text-4xl mb-4 float">
                                    {site.logo}
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-bold font-cairo text-foreground mb-2 group-hover:text-primary transition-smooth">
                                    {site.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground">
                                    {site.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Banner */}
                <div className="text-center">
                    {/* Card */}
                    <div className="max-w-4xl mx-auto shadow-card border-0 bg-white/90 backdrop-blur-sm rounded-2xl">
                        {/* Card Content */}
                        <div className="p-8">
                            <h3 className="text-2xl md:text-3xl font-bold font-cairo text-foreground mb-6">
                                شاملين كل حاجة عشانك!
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🔍</div>
                                    <div className="text-2xl font-bold text-primary mb-2">بحث شامل</div>
                                    <div className="text-muted-foreground">في كل المواقع مرة واحدة</div>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl mb-4">⚡</div>
                                    <div className="text-2xl font-bold text-accent mb-2">سرعة فائقة</div>
                                    <div className="text-muted-foreground">نتائج في ثوانٍ معدودة</div>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl mb-4">🎯</div>
                                    <div className="text-2xl font-bold text-mint mb-2">دقة عالية</div>
                                    <div className="text-muted-foreground">وظائف مناسبة لمهاراتك</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsitesSection;