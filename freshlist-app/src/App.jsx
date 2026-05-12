import { motion } from 'framer-motion';
import { 
  Check, 
  ListTodo, 
  Users, 
  Repeat, 
  Home, 
  ShoppingBag, 
  Star,
  ArrowRight,
  Menu,
  X,
  Leaf
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-fresh-50 overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Download CTA Section */}
      <DownloadCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navigation Component
function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-fresh-50/80 backdrop-blur-md border-b border-fresh-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl text-green-700">Freshlist</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-fresh-700 hover:text-green-600 transition-colors font-medium">Features</a>
          <a href="#how-it-works" className="text-fresh-700 hover:text-green-600 transition-colors font-medium">How It Works</a>
          <a href="#testimonials" className="text-fresh-700 hover:text-green-600 transition-colors font-medium">Reviews</a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            Download Free
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fresh-200 rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-green-700" />
            #1 Grocery App of 2024
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-fresh-900 leading-tight mb-6">
            Grocery Shopping,{' '}
            <span className="text-green-600">Reimagined</span>
          </h1>
          
          <p className="text-lg md:text-xl text-fresh-700 mb-8 max-w-lg leading-relaxed">
            The smart, minimal grocery list that helps you shop faster, waste less, and never forget the essentials again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(46, 125, 50, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              Download Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-fresh-300 text-fresh-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-green-600 hover:text-green-600 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-sm font-medium">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                ))}
              </div>
              <p className="text-sm text-fresh-600">Loved by 50,000+ shoppers</p>
            </div>
          </div>
        </motion.div>
        
        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="w-72 md:w-80 bg-fresh-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-[580px] bg-fresh-50 rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="h-8 bg-fresh-900 flex items-center justify-center">
                  <div className="w-20 h-5 bg-black rounded-full" />
                </div>
                
                {/* App Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-xs text-fresh-600">Good morning</p>
                      <h3 className="font-display font-bold text-xl text-fresh-900">My List</h3>
                    </div>
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  
                  {/* Search */}
                  <div className="bg-fresh-100 rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-fresh-500" />
                    <span className="text-fresh-500 text-sm">Search items...</span>
                  </div>
                  
                  {/* Categories */}
                  <div className="flex gap-3 mb-6 overflow-x-auto">
                    {['All', 'Produce', 'Dairy', 'Bakery'].map((cat, i) => (
                      <button
                        key={cat}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                          i === 0 ? 'bg-green-600 text-white' : 'bg-fresh-100 text-fresh-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  
                  {/* List Items */}
                  <div className="space-y-3">
                    {[
                      { name: 'Organic Bananas', qty: '1 bunch', checked: false },
                      { name: 'Almond Milk', qty: '2 cartons', checked: true },
                      { name: 'Sourdough Bread', qty: '1 loaf', checked: false },
                      { name: 'Avocados', qty: '4 pcs', checked: false },
                      { name: 'Greek Yogurt', qty: '3 cups', checked: true },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-3 rounded-xl ${
                          item.checked ? 'bg-fresh-100' : 'bg-white shadow-sm'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          item.checked ? 'bg-green-600 border-green-600' : 'border-fresh-300'
                        }`}>
                          {item.checked && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${item.checked ? 'line-through text-fresh-500' : 'text-fresh-900'}`}>
                            {item.name}
                          </p>
                          <p className="text-xs text-fresh-500">{item.qty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add Button */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <ListTodo className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
            >
              <Check className="w-6 h-6 text-green-600" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
            >
              <Home className="w-6 h-6 text-green-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  const problems = [
    { stat: '30%', desc: 'of groceries end up in the trash' },
    { stat: '$1,500', desc: 'average annual food waste per household' },
    { stat: '45 min', desc: 'spent weekly on unplanned shopping trips' },
  ];
  
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fresh-900 mb-4">
            Stop Wasting Time & Money
          </h2>
          <p className="text-lg text-fresh-700 max-w-2xl mx-auto">
            We've all been there—forgetting ingredients, buying duplicates, or standing in the aisle wondering what you need.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-fresh-50 rounded-3xl p-8 text-center"
            >
              <p className="font-display text-5xl font-bold text-green-600 mb-2">{problem.stat}</p>
              <p className="text-fresh-700">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: ListTodo,
      title: 'Smart Categorization',
      desc: 'Items automatically organized by store section for efficient shopping.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      title: 'Shared Lists',
      desc: 'Sync with family or roommates in real-time. Everyone stays on the same page.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Repeat,
      title: 'One-Tap Reorder',
      desc: 'Quickly add your regular items with a single tap. Never start from scratch.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Home,
      title: 'Pantry Sync',
      desc: 'Track what you have at home and get smart suggestions before you shop.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];
  
  return (
    <section id="features" className="py-20 px-6 bg-fresh-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fresh-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-fresh-700 max-w-2xl mx-auto">
            Powerful features designed to make grocery shopping effortless and enjoyable.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-fresh-900 mb-3">{feature.title}</h3>
              <p className="text-fresh-700 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Add Items',
      desc: 'Type, speak, or scan barcodes to add items instantly.',
      icon: ListTodo,
    },
    {
      num: '02',
      title: 'Get Organized',
      desc: 'AI sorts everything by store layout automatically.',
      icon: Check,
    },
    {
      num: '03',
      title: 'Shop Smarter',
      desc: 'Check off items as you go and never miss a thing.',
      icon: ShoppingBag,
    },
  ];
  
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fresh-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-fresh-700 max-w-2xl mx-auto">
            Three simple steps to transform your shopping experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto relative z-10">
                {step.num}
              </div>
              <div className="bg-fresh-50 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-fresh-900 mb-3">{step.title}</h3>
                <p className="text-fresh-700">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "Freshlist cut my shopping time in half. I actually enjoy grocery shopping now!",
      name: 'Sarah M.',
      initials: 'SM',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      quote: "Finally, an app that understands how families shop. Shared lists are a game-changer.",
      name: 'Michael R.',
      initials: 'MR',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      quote: "I've tried every grocery app out there. Freshlist is by far the most intuitive and beautiful.",
      name: 'Emma L.',
      initials: 'EL',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];
  
  return (
    <section id="testimonials" className="py-20 px-6 bg-fresh-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fresh-900 mb-4">
            Loved by Shoppers
          </h2>
          <p className="text-lg text-fresh-700 max-w-2xl mx-auto">
            See what our community has to say about Freshlist.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <p className="text-fresh-800 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-fresh-900">{testimonial.name}</p>
                  <p className="text-sm text-fresh-600">Verified User</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Download CTA Section
function DownloadCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Shop Smarter?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join thousands of happy shoppers who've transformed their grocery routine with Freshlist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-fresh-50 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-.8 1.94-.8s.16 1.54-.8 2.67c-.96 1.13-2.54 1.02-2.54 1.02s-.17-1.54.8-2.67c.32-.38.6-.62.6-.62z"/>
              </svg>
              App Store
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-fresh-50 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </motion.button>
          </div>
          
          <p className="mt-8 text-green-200 text-sm">
            Free to download • No credit card required • Available on iOS & Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-fresh-900 text-fresh-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">Freshlist</span>
            </div>
            <p className="text-fresh-400 max-w-sm">
              The smart, minimal grocery list that helps you shop faster and waste less.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-fresh-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-fresh-500">
            © 2024 Freshlist. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-fresh-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-fresh-500 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
