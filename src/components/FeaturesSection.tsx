import { Search, Zap, Shield, Heart, Target, Clock } from "lucide-react";

const features = [
    {
        icon: Search,
        title: "بحث ذكي وسريع",
        description: "خوارزمية متطورة تدور لك على أفضل الوظائف اللي تناسب مهاراتك وخبرتك",
        color: "text-primary",
        bgColor: "bg-primary/10"
    },
    {
        icon: Zap,
        title: "نتائج فورية",
        description: "في ثواني هتلاقي كل الوظائف المتاحة من أكبر مواقع التوظيف في مصر",
        color: "text-accent",
        bgColor: "bg-accent/10"
    },
    {
        icon: Shield,
        title: "وظائف موثوقة 100%",
        description: "كل الوظائف متحققة ومن شركات معروفة ومضمونة",
        color: "text-mint",
        bgColor: "bg-mint/10"
    },
    {
        icon: Heart,
        title: "سهولة في الاستخدام",
        description: "واجهة بسيطة وودودة تخليك تركز على اللي مهم فعلاً",
        color: "text-warm",
        bgColor: "bg-warm/10"
    },
    {
        icon: Target,
        title: "وظائف مخصصة ليك",
        description: "نتائج بحث مخصصة حسب مجالك ومستوى خبرتك",
        color: "text-secondary",
        bgColor: "bg-secondary/10"
    },
    {
        icon: Clock,
        title: "متابعة مستمرة",
        description: "إشعارات فورية بأحدث الوظائف اللي تناسبك",
        color: "text-primary",
        bgColor: "bg-primary/10"
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-20 px-4 bg-background">
            <div className="container max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 fade-in">
                    <h2 className="text-3xl md:text-5xl font-bold font-cairo text-foreground mb-6">
                        ليه تختار صياد الوظائف؟
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        احنا مش بس بندور على الوظائف... احنا بنساعدك تلاقي المسار المهني المثالي ليك
                    </p>
                </div>

                {/* Features Grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="shadow-card border-0 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-smooth hover-bounce group"
                        >
                            <div className="p-8 text-center">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-6 float`}>
                                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold font-cairo text-foreground mb-4 group-hover:text-primary transition-smooth">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Call to Action */}
                <div className="text-center mt-16 fade-in">
                    <div className="inline-block p-6 rounded-2xl gradient-secondary">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            جاهز تبدأ رحلتك؟
                        </h3>
                        <p className="text-white/90 mb-0">
                            انضم لآلاف الباحثين عن العمل اللي لقوا وظائفهم معانا!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;