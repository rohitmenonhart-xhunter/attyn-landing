'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, Users, Clock, Target, Lightbulb, Code, GraduationCap } from 'lucide-react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-black/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-black/3 via-transparent to-black/3 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-xl border-b border-white/20">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
            <img 
              src="/logo.jpg" 
              alt="Attyn Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <a href="/" className="text-base sm:text-lg font-bold text-black">
            Attyn
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
          <a href="/#features" className="text-xs font-bold text-black/70 hover:text-black transition-all duration-300 uppercase tracking-wide">
            Features
          </a>
          <a href="/#pricing" className="text-xs font-bold text-black/70 hover:text-black transition-all duration-300 uppercase tracking-wide">
            Pricing
          </a>
          <a href="/about" className="text-xs font-bold text-black hover:text-black transition-all duration-300 uppercase tracking-wide">
            About
          </a>
          <Button size="sm" className="text-xs font-bold bg-black hover:bg-black/90 shadow-lg px-3 lg:px-4 py-2" asChild>
            <a href="https://app.attyn.com" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-lg">
            <div className="px-4 py-6 space-y-4 max-w-sm mx-auto">
              <a href="/#features" className="block text-sm font-bold text-black/70 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="/#pricing" className="block text-sm font-bold text-black/70 py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="/about" className="block text-sm font-bold text-black py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <div className="pt-4 space-y-3">
                <Button size="sm" className="w-full text-sm font-bold bg-black hover:bg-black/90 py-3" asChild>
                  <a href="https://app.attyn.com" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/30 backdrop-blur-lg rounded-full border border-white/20 shadow-lg mb-6 sm:mb-8">
            <GraduationCap className="w-4 h-4 mr-2 text-black/70" />
            <span className="text-xs font-bold text-black/70 uppercase tracking-wide">Our Story</span>
          </div>
          
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4 sm:mb-6 px-2">
            From Frustration to Innovation
          </h1>
          <p className="text-xs sm:text-sm text-black/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            The story of how a computer science student's struggle with group projects became the foundation for revolutionizing organizational task management.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* The Problem */}
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h2 className="text-sm sm:text-base font-medium text-black">The Problem</h2>
            </div>
            <div className="pl-11 sm:pl-14">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                It was my junior year at university, and I was assigned to lead a complex software engineering project with 12 team members. What should have been an exciting challenge quickly became a nightmare of miscommunication, missed deadlines, and endless confusion.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Sarah, our UI designer, was waiting for wireframes from the UX team. Meanwhile, the backend developers had no idea which APIs were actually needed. Our project manager was drowning in status update emails, and half the team didn't even know what others were working on.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                The worst part? Everyone was working hard, but we were all working in silos. There was no clear hierarchy, no visibility into who was responsible for what, and no way to understand how individual tasks connected to our larger goals.
              </p>
            </div>
          </div>

          {/* The Realization */}
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h2 className="text-sm sm:text-base font-medium text-black">The Realization</h2>
            </div>
            <div className="pl-11 sm:pl-14">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                After nearly failing our midterm presentation, I had an epiphany during a late-night coding session. I realized that our problem wasn't technical—it was organizational. We needed different views of the same information based on our roles.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                As the project lead, I needed to see the big picture: overall progress, bottlenecks, and resource allocation. But Sarah just needed to know her specific tasks and who to collaborate with. The developers needed technical details and dependencies.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                That's when it hit me: <strong>what if task management could adapt to organizational hierarchy?</strong> What if everyone could see exactly what they needed to see, nothing more, nothing less?
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h2 className="text-sm sm:text-base font-medium text-black">The Solution</h2>
            </div>
            <div className="pl-11 sm:pl-14">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                I spent the next six months building a prototype during my free time. The core idea was simple but revolutionary: create a task management system that understands organizational structure and adapts the interface accordingly.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                For our final project, I implemented this system. The results were immediate and dramatic. Communication improved, deadlines were met, and everyone felt more connected to the larger mission. We went from barely passing to receiving the highest grade in the class.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                But more importantly, I realized this wasn't just a solution for student projects—this was something every organization needed.
              </p>
            </div>
          </div>

          {/* The Journey */}
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <h2 className="text-sm sm:text-base font-medium text-black">The Journey</h2>
            </div>
            <div className="pl-11 sm:pl-14">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                After graduation, instead of taking a traditional job, I decided to turn this idea into reality. I spent two years refining the concept, talking to hundreds of professionals across different industries, and understanding their pain points.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                The feedback was consistent: everyone struggled with the same fundamental problem I had experienced. Whether it was a startup with 10 people or an enterprise with 10,000 employees, the challenge was always the same—how to maintain clarity and coordination across hierarchical structures.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Today, Attyn is the culmination of that journey. It's not just a task management tool—it's a solution born from real frustration, built with genuine empathy, and designed to solve the organizational challenges that keep teams from reaching their full potential.
              </p>
            </div>
          </div>

          {/* The Mission */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl font-light text-black mb-4">Our Mission Today</h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                We believe that great work happens when everyone understands their role, sees how they contribute to the bigger picture, and has the right information at the right time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-medium text-black mb-2 text-sm">Clarity</h3>
                <p className="text-gray-600 text-xs">Everyone knows exactly what they need to do and why it matters.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-medium text-black mb-2 text-sm">Connection</h3>
                <p className="text-gray-600 text-xs">Teams work together seamlessly, understanding how their efforts connect.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-medium text-black mb-2 text-sm">Efficiency</h3>
                <p className="text-gray-600 text-xs">No more time wasted on confusion, miscommunication, or duplicate work.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-4">
            Ready to transform your organization?
          </h2>
          <p className="text-white/70 mb-8 text-xs sm:text-sm leading-relaxed">
            Join thousands of organizations who have already discovered the power of hierarchy-aware task management.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="sm" className="bg-white hover:bg-white/90 text-black px-6 py-2 text-sm font-medium" asChild>
              <a href="https://app.attyn.com" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="px-6 py-2 text-sm font-medium border-white/30 hover:bg-white/10 text-white" asChild>
              <a href="/#features">
                Learn More
              </a>
            </Button>
          </div>
          <p className="text-xs text-white/50 mt-4">
            No credit card required • 14-day free trial • Setup in under 30 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 rounded-md overflow-hidden bg-black/10 border border-black/20">
                  <img 
                    src="/logo.jpg" 
                    alt="Attyn Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-lg font-bold text-black">Attyn</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hierarchy-aware task management that adapts to your organization's structure.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-black mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/#features" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="/#pricing" className="hover:text-black transition-colors">Pricing</a></li>
                <li><a href="/about" className="hover:text-black transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-black mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/about" className="hover:text-black transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-black mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              © 2024 Attyn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
