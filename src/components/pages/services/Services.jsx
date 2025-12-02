import { Code2, Palette, Zap, BookOpen, Users, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import BlurText from '@/components/UI/BlurText';

function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building fast, scalable, and maintainable web applications using modern frameworks and technologies.',
      features: ['React & Next.js', 'TypeScript', 'Full Stack Solutions', 'API Integration'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces that prioritize user experience and accessibility.',
      features: ['Responsive Design', 'User Research', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Zap,
      title: 'AI Development',
      description: 'Creating intelligent AI solutions including AI agents, chatbots, and LLM-powered systems for web and business automation.',
      features: ['Custom AI Agents', 'AI Chatbots', 'LLM Integration', 'Automation Tools'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating responsive and native mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Cross-platform', 'Performance Optimization', 'App Publishing'],
    },
    {
      icon: BookOpen,
      title: 'Technical Consulting',
      description: 'Providing expert guidance on architecture, technology selection, and best practices.',
      features: ['Architecture Review', 'Tech Stack Planning', 'Code Review', 'Team Training'],
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Joining your team as a dedicated developer to accelerate project delivery.',
      features: ['Flexible Engagement', 'Remote/On-site', 'Full Integration', 'Scalable Support'],
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your goals, challenges, and requirements.' },
    { step: '02', title: 'Strategy', description: 'Developing a comprehensive plan tailored to your needs.' },
    { step: '03', title: 'Development', description: 'Building solutions with attention to quality and detail.' },
    { step: '04', title: 'Launch', description: 'Deploying and monitoring your solution for success.' },
  ];

  return (
    <section className="bg-black text-gray-300 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="flex justify-center text-4xl md:text-5xl font-bold text-white mb-6">
            <BlurText text="Services" animateBy="words" />
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to transform your ideas into exceptional digital products. From concept to launch, I provide expertise across the full development lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-white/5"
                >
                  <Icon className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-white/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="py-12 border-y border-white/10 mb-24">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-white/20 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                {index !== process.length - 1 && (
                  <div className="hidden md:flex absolute top-8 right-0 transform translate-x-full items-center justify-center w-8">
                    <ArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Flexible Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Project-Based</h3>
              <p className="text-gray-400 text-sm mb-6">For defined, time-bound projects with clear deliverables.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Detailed proposal & timeline
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Fixed or hourly rates
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Regular updates & reviews
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-white/10 border border-white/30 hover:border-white/50 transition-all ring-1 ring-white/20">
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white mb-4">Popular</div>
              <h3 className="text-xl font-bold text-white mb-2">Retainer</h3>
              <p className="text-gray-400 text-sm mb-6">For ongoing support and continuous development.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Dedicated support hours
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Priority access
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Flexible scaling
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Consulting</h3>
              <p className="text-gray-400 text-sm mb-6">For expert advice and strategic guidance.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Hourly consultation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Technical reviews
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Strategy sessions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Ready to get started?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors group"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;
  