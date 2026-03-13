import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Heart, Activity, Phone, Globe, Calendar, BookOpen, Menu, X, ChevronRight } from 'lucide-react';

type View = 'home' | 'fitness' | 'support' | 'advocacy';

const Home = () => (
  <div className="space-y-12">
    <div className="relative rounded-3xl overflow-hidden bg-teal-900 text-white shadow-xl">
      <img src="https://picsum.photos/seed/calm/1200/400" alt="Calm nature" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" referrerPolicy="no-referrer" />
      <div className="relative px-8 py-20 md:px-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Mental Health & Fitness
        </h1>
        <p className="text-xl font-medium text-teal-50 max-w-2xl mx-auto">
          A comprehensive guide to understanding, developing, and maintaining your mental wellbeing.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
          <Brain size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">What is Mental Health?</h2>
        <p className="text-slate-600 leading-relaxed">
          Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
        </p>
      </section>

      <section className="bg-teal-50 p-8 rounded-3xl shadow-sm border border-teal-100">
        <div className="w-12 h-12 bg-teal-200 text-teal-700 rounded-2xl flex items-center justify-center mb-6">
          <Heart size={24} />
        </div>
        <h2 className="text-2xl font-bold text-teal-900 mb-4">Why is it Important?</h2>
        <p className="text-teal-800 mb-4">
          Looking after our mental health is just as important as our physical health. Good mental health allows us to:
        </p>
        <ul className="space-y-3">
          {[
            'Cope with the normal stresses of life',
            'Work productively and realize our full potential',
            'Build and maintain healthy relationships',
            'Make meaningful contributions to our communities',
            'Recover from setbacks and build resilience'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-teal-800">
              <ChevronRight size={20} className="text-teal-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

const Fitness = () => (
  <div className="space-y-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Mental Fitness</h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">Strategies and focus areas to build your mental resilience and everyday wellbeing.</p>
    </div>

    <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <div className="aspect-square rounded-2xl overflow-hidden mb-6">
            <img src="https://picsum.photos/seed/mindful/600/600" alt="Mindfulness" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Mindfulness</h2>
          <p className="text-indigo-600 font-medium mb-4">Focus Area</p>
        </div>
        <div className="md:w-2/3 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">What is it?</h3>
            <p className="text-slate-600 leading-relaxed">
              Mindfulness is the practice of purposely bringing one's attention to the present moment without evaluation or judgment. It involves acknowledging and accepting one's feelings, thoughts, and bodily sensations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Everyday Examples</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Paying full attention to the taste and texture of food.</li>
                <li className="flex gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Noticing the feeling of the wind during a walk.</li>
                <li className="flex gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Actively listening without planning your reply.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">How to Develop</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Start with 5-minute daily meditations.</li>
                <li className="flex gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Practice mindful breathing exercises.</li>
                <li className="flex gap-2 text-slate-600 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" /> Use the 5-4-3-2-1 sensory grounding method.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-indigo-900 text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
        <Activity size={200} />
      </div>
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 bg-indigo-800 text-indigo-200 text-sm font-bold tracking-wider uppercase rounded-full mb-6">Practical Strategy</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Box Breathing</h2>
        <p className="text-indigo-200 text-lg max-w-2xl mb-10">
          Also known as four-square breathing, this is a simple and highly effective technique for stress management and regaining calm.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-indigo-100">The 4-4-4-4 Method</h3>
            <ol className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold shrink-0">1</div>
                <p><strong>Inhale</strong> slowly through your nose for 4 seconds.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold shrink-0">2</div>
                <p><strong>Hold</strong> your breath for 4 seconds.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold shrink-0">3</div>
                <p><strong>Exhale</strong> slowly through your mouth for 4 seconds.</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold shrink-0">4</div>
                <p><strong>Hold</strong> your breath empty for 4 seconds.</p>
              </li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-100">Why it works</h3>
            <p className="text-indigo-200 leading-relaxed mb-4">
              This strategy supports mental health by activating the parasympathetic nervous system (the body's "rest and digest" mode).
            </p>
            <ul className="space-y-3 text-indigo-200">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Physically lowers heart rate</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Reduces stress hormones like cortisol</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /> Clears the mind during anxiety</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Support = () => (
  <div className="space-y-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Support Services</h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">Professional help is available. Don't hesitate to reach out to these local and national organizations.</p>
    </div>

    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
          <Heart size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">Local Agencies</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Headspace Chatswood</h3>
            <p className="text-slate-500">Early intervention mental health services.</p>
          </div>
          <p className="text-slate-600 mb-6 flex-grow">
            Provides tailored and holistic mental health support to 12-25 year olds, along with assistance in promoting young peoples' overall wellbeing.
          </p>
          <div className="bg-slate-50 p-5 rounded-2xl space-y-3">
            <div className="flex gap-3">
              <Activity className="text-rose-500 shrink-0" size={20} />
              <p className="text-sm text-slate-700"><strong>Helps with:</strong> Mental health, physical health, work & study, alcohol/drugs.</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-rose-500 shrink-0" size={20} />
              <p className="text-sm text-slate-700"><strong>Contact:</strong> (02) 8021 3668</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Lifeline Northern Sydney</h3>
            <p className="text-slate-500">Crisis support & suicide prevention.</p>
          </div>
          <p className="text-slate-600 mb-6 flex-grow">
            Provides local crisis support and suicide prevention services to the community, ensuring no one has to face their darkest moments alone.
          </p>
          <div className="bg-slate-50 p-5 rounded-2xl space-y-3">
            <div className="flex gap-3">
              <Activity className="text-rose-500 shrink-0" size={20} />
              <p className="text-sm text-slate-700"><strong>Helps by:</strong> Offering 24/7 listening and support without judgment.</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-rose-500 shrink-0" size={20} />
              <p className="text-sm text-slate-700"><strong>Contact:</strong> 13 11 14 (Available 24/7)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Globe size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">National & Online</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <a href="https://www.beyondblue.org.au/" target="_blank" rel="noreferrer" className="group block bg-blue-600 p-8 rounded-3xl text-white hover:bg-blue-700 transition-colors">
          <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
            Beyond Blue
            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-blue-100 mb-6">
            Provides information and support to help everyone in Australia achieve their best possible mental health, whatever their age and wherever they live.
          </p>
          <span className="inline-block px-4 py-2 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-sm">Visit Website</span>
        </a>
        
        <a href="https://kidshelpline.com.au/" target="_blank" rel="noreferrer" className="group block bg-sky-500 p-8 rounded-3xl text-white hover:bg-sky-600 transition-colors">
          <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
            Kids Helpline
            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sky-100 mb-6">
            Australia's only free, private and confidential 24/7 phone and online counselling service for young people aged 5 to 25.
          </p>
          <span className="inline-block px-4 py-2 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-sm">Visit Website</span>
        </a>
      </div>
    </section>
  </div>
);

const Advocacy = () => (
  <div className="space-y-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Advocacy & Resources</h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get involved in mental health awareness and discover tools to help you on your journey.</p>
    </div>

    <section className="bg-amber-400 p-8 md:p-12 rounded-3xl shadow-sm text-slate-900">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <span className="inline-block px-3 py-1 bg-black/10 text-black text-sm font-bold tracking-wider uppercase rounded-full mb-4">Advocacy Day</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">R U OK? Day</h2>
          <p className="text-lg font-medium mb-6">
            A national day of action dedicated to reminding everyone that any day is the day to ask, "Are you OK?"
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Why it matters:</h3>
            <p className="leading-relaxed">
              A conversation could change a life. By checking in, we can help people feel supported and connected long before they reach a crisis point. It empowers people to meaningfully connect with those in their world.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">How to get involved</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <strong className="block text-slate-800">Learn the 4 steps</strong>
                  <span className="text-slate-600 text-sm">Ask, Listen, Encourage action, Check in.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <strong className="block text-slate-800">Host an event</strong>
                  <span className="text-slate-600 text-sm">Organize a morning tea at school or work.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <strong className="block text-slate-800">Wear yellow</strong>
                  <span className="text-slate-600 text-sm">Show your support visibly on the day.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
          <BookOpen size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">Additional Resources</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl shrink-0 flex items-center justify-center">
            <Phone className="text-emerald-600" size={32} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 block">Mobile App</span>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Smiling Mind</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A free, evidence-based mindfulness and meditation app developed by psychologists and educators to help build mental fitness and resilience.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex gap-6">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl shrink-0 flex items-center justify-center">
            <Activity className="text-purple-600" size={32} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-1 block">Podcast</span>
            <h3 className="text-xl font-bold text-slate-800 mb-2">The Imperfects</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hosted by Hugh van Cuylenburg and friends, chatting with guests about their struggles and imperfections, promoting vulnerability.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Introduction' },
    { id: 'fitness', label: 'Mental Fitness' },
    { id: 'support', label: 'Support Services' },
    { id: 'advocacy', label: 'Advocacy & Resources' },
  ] as const;

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home />;
      case 'fitness': return <Fitness />;
      case 'support': return <Support />;
      case 'advocacy': return <Advocacy />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-teal-600 text-white p-2 rounded-lg">
                <Brain size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">MindMatters</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentView === item.id 
                      ? 'bg-teal-50 text-teal-700' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentView(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                      currentView === item.id 
                        ? 'bg-teal-50 text-teal-700' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Brain size={20} className="text-teal-500" />
            <span className="font-bold text-lg text-slate-200">MindMatters</span>
          </div>
          <p className="text-sm">
            Created for Chatswood High School • Year 9 PDHPE Assessment Task 1
          </p>
          <p className="text-xs mt-2 opacity-60">
            Information provided is for educational purposes. If you need immediate help, please contact Lifeline at 13 11 14.
          </p>
        </div>
      </footer>
    </div>
  );
}
