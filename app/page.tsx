"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlipWords } from "@/components/ui/flip-words";
import { 
  CheckCircle, 
  Calendar, 
  Users, 
  BarChart3, 
  Zap, 
  Shield,
  ArrowRight,
  Menu,
  X,
  Eye,
  Layers,
  Clock,
  TrendingUp,
  UserCheck,
  Network
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Hierarchy-Aware Organization",
    description: "Create organizations with intelligent hierarchy management that respects your company&apos;s structure and reporting lines."
  },
  {
    icon: Eye,
    title: "Eagle-Eye Dashboard",
    description: "Level-aware visibility system where executives see everything while teams see what&apos;s relevant to their role."
  },
  {
    icon: Clock,
    title: "Real-Time Task Tracking",
    description: "Live monitoring of who&apos;s doing what, when, with instant updates across all organizational levels."
  },
  {
    icon: TrendingUp,
    title: "Completion Analytics",
    description: "Organization-wide task completion rates, productivity metrics, and performance insights at every hierarchy level."
  },
  {
    icon: UserCheck,
    title: "Smart Invitation System",
    description: "Automated invitation workflows that maintain organizational hierarchy and ensure proper access levels."
  },
  {
    icon: Network,
    title: "Intelligent Task Distribution",
    description: "AI-powered task assignment that understands your org chart and optimizes work distribution across teams."
  }
];


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Attyn",
    "description": "Intelligent hierarchical task management platform that adapts to your organizational structure for better visibility and coordination.",
    "url": "https://attyn.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Forever",
        "price": "0",
        "priceCurrency": "USD",
        "description": "7 days data retention with core task management features"
      },
      {
        "@type": "Offer",
        "name": "Enterprise",
        "description": "Custom pricing for large organizations with advanced features"
      }
    ],
    "featureList": [
      "Hierarchical task management",
      "Real-time collaboration",
      "Organizational structure mapping",
      "Custom role-based access",
      "Analytics and reporting",
      "Team coordination tools"
    ],
    "screenshot": "https://attyn.com/screenshot.png",
    "author": {
      "@type": "Organization",
      "name": "Attyn"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                <img 
                  src="/logo.jpg" 
                  alt="Attyn Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base sm:text-lg font-bold text-black tracking-tight">attyn</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#features" className="text-xs font-bold text-black/70 hover:text-black transition-all duration-300 uppercase tracking-wide">
                Features
              </a>
              <a href="#pricing" className="text-xs font-bold text-black/70 hover:text-black transition-all duration-300 uppercase tracking-wide">
                Pricing
              </a>
              <a href="/about" className="text-xs font-bold text-black/70 hover:text-black transition-all duration-300 uppercase tracking-wide">
                About
              </a>
              <Button size="sm" className="text-xs font-bold bg-black hover:bg-black/90 shadow-lg px-3 lg:px-4 py-2" asChild>
                <a href="https://task.attyn.com" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-lg">
            <div className="px-4 py-6 space-y-4 max-w-sm mx-auto">
              <a href="#features" className="block text-sm font-bold text-black/70 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#pricing" className="block text-sm font-bold text-black/70 py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="/about" className="block text-sm font-bold text-black/70 py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <div className="pt-4 space-y-3">
                <Button size="sm" className="w-full text-sm font-bold bg-black hover:bg-black/90 py-3" asChild>
                  <a href="https://task.attyn.com" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8" aria-label="Hero section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex flex-col items-center gap-2 mb-6 sm:mb-8">
              <div className="inline-block bg-white/40 backdrop-blur-lg border border-white/30 rounded-full px-3 sm:px-4 py-2">
                <span className="text-xs font-bold text-black/80 uppercase tracking-widest">Next Generation Task Management</span>
              </div>
              <div className="inline-block bg-black/90 backdrop-blur-lg border border-black/30 rounded-full px-2 py-1">
                <span className="text-xs font-medium text-white uppercase tracking-wide">⚡ Beta Testing Right Now</span>
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight tracking-tight max-w-4xl mx-auto px-2">
              <FlipWords 
                words={["Intelligent", "Revolutionary", "Modern", "Seamless"]} 
                duration={2500}
                className="text-black font-bold"
              /> hierarchy-aware task management for modern organizations
            </h1>
            <p className="text-xs sm:text-sm font-medium text-black/60 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              Create organizations, manage hierarchies, and track every task in real-time. 
              Get eagle-eye visibility across all levels while respecting your organizational structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-sm sm:max-w-none mx-auto">
              <Button size="sm" className="w-full sm:w-auto bg-black hover:bg-black/90 text-white px-4 py-2 text-xs font-bold shadow-xl" asChild>
                <a href="https://task.attyn.com" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-3 w-3" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full sm:w-auto px-4 py-2 text-xs font-bold border-black/20 hover:bg-black/5 backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>
          </div>
            
          {/* Premium Hero Visual */}
          <div className="relative">
            {/* Main Dashboard Preview */}
            <div className="bg-white/30 backdrop-blur-2xl rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-black">TechCorp Organization</div>
                    <div className="text-xs font-medium text-black/60">Enterprise Dashboard</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
                  <span className="text-xs font-bold text-black/70">Live</span>
                </div>
              </div>

              {/* Hierarchy Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 lg:gap-3 mb-3 sm:mb-4 lg:mb-6">
                <div className="bg-white/50 backdrop-blur-lg rounded-md sm:rounded-lg p-2 sm:p-3 border border-white/30">
                  <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-3">
                    <span className="text-xs font-bold text-black/80 bg-white/60 px-2 py-1 rounded-md">EXECUTIVE</span>
                    <Eye className="h-3 w-3 text-black/60" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-black/20 rounded-full">
                      <div className="h-1.5 bg-black rounded-full w-4/5"></div>
                    </div>
                    <div className="text-xs font-bold text-black/80">87% Complete</div>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-medium text-black/60 space-y-1 sm:space-y-0">
                      <span>Marketing: 92%</span>
                      <span>Dev: 78%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 backdrop-blur-lg rounded-md sm:rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/30">
                  <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-3">
                    <span className="text-xs font-bold text-black/80 bg-white/60 px-2 py-1 rounded-md">MANAGER</span>
                    <Users className="h-3 w-3 text-black/60" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-black">12 Active Tasks</div>
                    <div className="space-y-1">
                      <div className="flex items-center text-xs font-medium">
                        <div className="w-1.5 h-1.5 bg-black/60 rounded-full mr-2"></div>
                        <span className="truncate">Website Redesign</span>
                      </div>
                      <div className="flex items-center text-xs font-medium">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
                        <span className="truncate">API Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/50 backdrop-blur-lg rounded-md sm:rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/30 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-between mb-1 sm:mb-2 lg:mb-3">
                    <span className="text-xs font-bold text-black/80 bg-white/60 px-2 py-1 rounded-md">TEAM</span>
                    <CheckCircle className="h-3 w-3 text-black/60" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-black">3 Tasks Today</div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="truncate">Update dashboard</span>
                        <Clock className="h-3 w-3 text-black/60 flex-shrink-0 ml-2" />
                      </div>
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="truncate">Review PR #234</span>
                        <CheckCircle className="h-3 w-3 text-black flex-shrink-0 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time Status */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-lg rounded-full px-3 sm:px-4 py-2 border border-white/30">
                  <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-black/80">Real-time sync across all levels</span>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-white/40 backdrop-blur-lg rounded-xl p-3 border border-white/30 shadow-lg">
              <div className="text-xs font-bold text-black/80">+24 Tasks</div>
              <div className="text-xs font-medium text-black/60">This week</div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white/40 backdrop-blur-lg rounded-xl p-3 border border-white/30 shadow-lg">
              <div className="text-xs font-bold text-black/80">98% Efficiency</div>
              <div className="text-xs font-medium text-black/60">Team average</div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" aria-label="Features section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 tracking-tight">
              Built for organizational excellence
            </h2>
            <p className="text-sm font-medium text-black/60 max-w-2xl mx-auto leading-relaxed px-2">
              Intelligent features that understand your hierarchy, respect your structure, and deliver unprecedented visibility across all levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 shadow-xl hover:bg-white/50 transition-all duration-300 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/60 backdrop-blur-lg rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                </div>
                <h3 className="font-bold text-black mb-1 sm:mb-2 lg:mb-3 text-xs sm:text-sm tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-black/70 font-medium text-xs leading-snug sm:leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block bg-white/40 backdrop-blur-lg border border-white/30 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
              <span className="text-xs font-bold text-black/80 uppercase tracking-widest">Simple Setup Process</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6 leading-tight tracking-tight max-w-4xl mx-auto px-2">
              How it works in 4 simple steps
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black/60 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              From setup to full organizational visibility in minutes, not months.
            </p>
            
            {/* Step Numbers Preview - Responsive */}
            <div className="hidden sm:flex items-center justify-center space-x-4 lg:space-x-8 mb-4">
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-black rounded-lg lg:rounded-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div className="w-8 lg:w-12 h-0.5 bg-black/20"></div>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-black rounded-lg lg:rounded-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div className="w-8 lg:w-12 h-0.5 bg-black/20"></div>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-black rounded-lg lg:rounded-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div className="w-8 lg:w-12 h-0.5 bg-black/20"></div>
              </div>
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-black rounded-lg lg:rounded-xl flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
            </div>
            
            {/* Mobile Step Numbers */}
            <div className="flex sm:hidden items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div className="w-4 h-0.5 bg-black/20"></div>
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div className="w-4 h-0.5 bg-black/20"></div>
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div className="w-4 h-0.5 bg-black/20"></div>
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">4</span>
              </div>
            </div>
            
            <div className="text-xs font-medium text-black/50 uppercase tracking-wider">
              Create → Invite → Manage → Monitor
            </div>
          </div>

          {/* Steps Flow */}
          <div className="space-y-12 sm:space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-sm sm:text-base font-bold">1</span>
                  </div>
                  <div className="text-xs font-bold text-black/50 uppercase tracking-wider">Step One</div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4 tracking-tight">Create Organization</h3>
                <p className="text-black/70 font-medium text-sm leading-relaxed mb-4 sm:mb-6">
                  Set up your organization with custom hierarchy levels, departments, and reporting structures that match your company.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Custom org chart builder
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Role-based permissions
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Department structures
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-white/30 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                  <div className="bg-white/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="text-xs font-bold text-black/80">Organization Setup</div>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-black/20 rounded-full">
                        <div className="h-2 bg-black rounded-full w-3/4"></div>
                      </div>
                      <div className="text-xs font-medium text-black/70">Setting up departments...</div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-6 sm:h-8 bg-white/60 rounded-lg"></div>
                        <div className="h-6 sm:h-8 bg-white/60 rounded-lg"></div>
                        <div className="h-6 sm:h-8 bg-white/60 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-sm sm:text-base font-bold">2</span>
                  </div>
                  <div className="text-xs font-bold text-black/50 uppercase tracking-wider">Step Two</div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-4 tracking-tight">Invite Team Members</h3>
                <p className="text-black/70 font-medium text-sm leading-relaxed mb-6">
                  Send intelligent invitations that automatically assign the right access levels based on hierarchy and role.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Bulk invitation system
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Auto-role assignment
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Onboarding workflows
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-bold text-black/80">Team Invitations</div>
                      <div className="text-xs font-medium text-black/60">5 sent</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-black/20 rounded-full mr-3"></div>
                          <div className="text-xs font-medium">sarah@company.com</div>
                        </div>
                        <div className="text-xs text-black/60">Manager</div>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-black/20 rounded-full mr-3"></div>
                          <div className="text-xs font-medium">mike@company.com</div>
                        </div>
                        <div className="text-xs text-black/60">Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-sm sm:text-base font-bold">3</span>
                  </div>
                  <div className="text-xs font-bold text-black/50 uppercase tracking-wider">Step Three</div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-4 tracking-tight">Start Managing Tasks</h3>
                <p className="text-black/70 font-medium text-sm leading-relaxed mb-6">
                  Create, assign, and track tasks with intelligent distribution that understands your organizational structure.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Smart task assignment
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Deadline management
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Progress tracking
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-bold text-black/80">Active Tasks</div>
                      <div className="text-xs font-medium text-black/60">8 total</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 px-3 bg-white/40 rounded-lg">
                        <div className="text-xs font-medium">Website Redesign</div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-white/40 rounded-lg">
                        <div className="text-xs font-medium">API Integration</div>
                        <div className="w-2 h-2 bg-black/60 rounded-full"></div>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-white/40 rounded-lg">
                        <div className="text-xs font-medium">Database Migration</div>
                        <div className="w-2 h-2 bg-black/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white text-sm sm:text-base font-bold">4</span>
                  </div>
                  <div className="text-xs font-bold text-black/50 uppercase tracking-wider">Step Four</div>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-4 tracking-tight">Monitor & Optimize</h3>
                <p className="text-black/70 font-medium text-sm leading-relaxed mb-6">
                  Get real-time insights with hierarchy-aware dashboards that show exactly what you need to see at your level.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Live analytics dashboard
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Performance insights
                  </div>
                  <div className="flex items-center text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                    Bottleneck detection
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs font-bold text-black/80">Performance Dashboard</div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-black rounded-full mr-2 animate-pulse"></div>
                        <div className="text-xs font-medium text-black/60">Live</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-medium text-black/70">Completion Rate</div>
                        <div className="text-xs font-bold text-black">87%</div>
                      </div>
                      <div className="h-2 bg-black/20 rounded-full">
                        <div className="h-2 bg-black rounded-full w-4/5"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-sm sm:text-base font-bold text-black">24</div>
                          <div className="text-xs text-black/60">Active</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm sm:text-base font-bold text-black">156</div>
                          <div className="text-xs text-black/60">Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-lg rounded-full px-6 py-3 border border-white/30">
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-black/80">Setup complete in under 30 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
              Built for every industry, every team size
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From startups to enterprises, see how organizations are transforming their task management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-8">By Industry</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-2">Technology Companies</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Manage complex development cycles with clear visibility from product managers to developers.
                    </p>
                    <div className="text-xs text-gray-500 italic">
                      "Reduced project delays by 40% with better cross-team coordination"
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-2">Marketing Agencies</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Track campaigns across multiple clients with role-based access and real-time progress updates.
                    </p>
                    <div className="text-xs text-gray-500 italic">
                      "Client satisfaction increased 60% with transparent progress tracking"
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-2">Financial Services</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Ensure compliance and audit trails with hierarchical approval workflows and detailed tracking.
                    </p>
                    <div className="text-xs text-gray-500 italic">
                      "Audit preparation time reduced from weeks to days"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-medium text-black mb-8">By Team Size</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-2">Startups (5-50 people)</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Scale rapidly while maintaining clear communication and accountability across all team members.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Quick setup in under 30 minutes</li>
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Flexible hierarchy as you grow</li>
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Cost-effective scaling</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-2">Mid-size (50-500 people)</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Manage complex department structures with clear reporting lines and cross-functional collaboration.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Department-level analytics</li>
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Advanced permission controls</li>
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Integration capabilities</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-2">Enterprise (500+ people)</h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      Enterprise-grade security and compliance with unlimited hierarchy levels and advanced analytics.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Unlimited organizational levels</li>
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Advanced security controls</li>
                      <li className="flex items-center"><div className="w-1 h-1 bg-black rounded-full mr-3"></div>Custom integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
              Trusted by organizations worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              See what leaders are saying about their transformation with Attyn.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm mb-6 leading-relaxed">
                "The hierarchy-aware dashboard is a game-changer. I can see exactly what my teams are working on without micromanaging, and they have the autonomy they need."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-medium">SJ</span>
                </div>
                <div>
                  <div className="font-medium text-black text-sm">Sarah Johnson</div>
                  <div className="text-xs text-gray-600">VP of Operations, TechCorp</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm mb-6 leading-relaxed">
                "We reduced our project completion time by 35% within the first quarter. The real-time visibility helps us identify bottlenecks before they become problems."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-medium">MR</span>
                </div>
                <div>
                  <div className="font-medium text-black text-sm">Michael Rodriguez</div>
                  <div className="text-xs text-gray-600">CTO, InnovateLabs</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm mb-6 leading-relaxed">
                "The intelligent invitation system saved us weeks of onboarding time. New team members are productive from day one with the right access levels automatically assigned."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-medium">AC</span>
                </div>
                <div>
                  <div className="font-medium text-black text-sm">Amanda Chen</div>
                  <div className="text-xs text-gray-600">Head of HR, GlobalFinance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
            Ready to revolutionize your organization?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Join thousands of organizations who are already managing tasks intelligently with hierarchy-aware visibility and real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="sm" className="bg-black hover:bg-gray-800 text-white px-6 py-2 text-sm font-medium" asChild>
              <a href="https://task.attyn.com" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
              </a>
            </Button>
            <Button variant="outline" size="sm" className="px-6 py-2 text-sm font-medium border-gray-200 hover:bg-gray-50">
              Schedule Demo
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Pricing section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Start free forever with core features. Upgrade for extended functionality and AI capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Free Forever */}
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-medium text-black mb-2">Free Forever</h3>
                <p className="text-gray-600 text-sm mb-4">Perfect for getting started</p>
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-light text-black">$0</span>
                  <span className="text-gray-600 text-sm">/always</span>
                </div>
                <Button size="sm" className="w-full bg-black hover:bg-gray-800 text-white text-sm font-medium" asChild>
                  <a href="https://task.attyn.com" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>7 days data retention</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Core task management</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Custom hierarchy</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Limited functionality</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>No AI features</span>
                </div>
              </div>
            </div>

            {/* Extended */}
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-medium text-black mb-2">Extended</h3>
                <p className="text-gray-600 text-sm mb-4">Advanced functionality</p>
                <div className="mb-4">
                  <span className="text-lg sm:text-xl font-light text-gray-400">Coming Soon</span>
                </div>
                <Button variant="outline" size="sm" disabled className="w-full border-gray-200 text-sm font-medium">
                  Notify Me
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Unlimited data retention</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Extended functionality</span>
                </div>
              </div>
            </div>

            {/* Extended + AI */}
            <div className="bg-white border-2 border-black rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-medium text-black mb-2">Extended + AI</h3>
                <p className="text-gray-600 text-sm mb-4">AI-powered intelligence</p>
                <div className="mb-4">
                  <span className="text-lg sm:text-xl font-light text-gray-400">Coming Soon</span>
                </div>
                <Button variant="outline" size="sm" disabled className="w-full border-gray-200 text-sm font-medium">
                  Notify Me
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Everything in Extended</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>AI task follow up</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Intelligent insights</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Smart recommendations</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Predictive analytics</span>
                </div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-medium text-black mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm mb-4">For large organizations</p>
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-light text-black">Custom</span>
                </div>
                <Button variant="outline" size="sm" className="w-full border-gray-200 hover:bg-gray-50 text-sm font-medium">
                  Contact Sales
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Everything in Extended + AI</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>White-label options</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Custom development</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>Dedicated success manager</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>SLA guarantees</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>On-premise deployment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Start free forever • No credit card required • Upgrade anytime
            </p>
            <div className="flex justify-center space-x-8 text-xs text-gray-500">
              <span>✓ 99.9% uptime SLA</span>
              <span>✓ SOC 2 compliant</span>
              <span>✓ GDPR compliant</span>
            </div>
          </div>
        </div>
      </section>


      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
              Enterprise-grade security
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your organizational data is protected with industry-leading security measures and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-black mb-2 text-sm">End-to-End Encryption</h3>
              <p className="text-gray-600 text-xs">All data encrypted in transit and at rest with AES-256</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-black mb-2 text-sm">SOC 2 Compliant</h3>
              <p className="text-gray-600 text-xs">Independently audited and certified for security controls</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-black mb-2 text-sm">GDPR Compliant</h3>
              <p className="text-gray-600 text-xs">Full compliance with European data protection regulations</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-black mb-2 text-sm">SSO Integration</h3>
              <p className="text-gray-600 text-xs">Single sign-on with SAML, OAuth, and Active Directory</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-black mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Attyn's hierarchical task management system.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-medium text-black mb-3 text-sm">How does the hierarchy-aware system work?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our system automatically adapts the interface based on your organizational role. Executives see organization-wide analytics, 
                managers see their team's progress, and individual contributors see their personal tasks. Everyone gets exactly the information 
                they need without overwhelming detail or restricted access.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-medium text-black mb-3 text-sm">Can I customize the organizational hierarchy?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! You can create custom hierarchy levels, define reporting structures, set up departments, and establish role-based 
                permissions that match your organization exactly. The system is flexible enough to handle flat organizations or complex 
                multi-level corporate structures.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-medium text-black mb-3 text-sm">How does real-time tracking work?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every task update, status change, and progress milestone is synchronized instantly across all hierarchy levels. When a team 
                member updates a task, their manager sees it immediately, and executives can view aggregated progress in real-time through 
                their dashboard.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-medium text-black mb-3 text-sm">What about data security and privacy?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We take security seriously with SOC 2 compliance, GDPR compliance, end-to-end encryption, and enterprise-grade security 
                controls. Your organizational data is protected with bank-level security, and you maintain full control over access permissions 
                and data retention policies.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-medium text-black mb-3 text-sm">How long does implementation take?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most organizations are up and running within 24-48 hours. Our intelligent onboarding process guides you through setting up 
                your hierarchy, inviting team members, and configuring permissions. For enterprise customers, we provide dedicated support 
                for complex implementations.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="font-medium text-black mb-3 text-sm">Do you offer training and support?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes! All plans include comprehensive onboarding, training materials, and ongoing support. Professional and Enterprise plans 
                include priority support, dedicated success managers, and custom training sessions for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 tracking-tight">
            Transform your organization today
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Join thousands of organizations already using intelligent hierarchical task management to achieve unprecedented visibility and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="sm" className="bg-white hover:bg-white/90 text-black px-6 py-2 text-sm font-medium" asChild>
              <a href="https://task.attyn.com" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="px-6 py-2 text-sm font-medium border-white/30 hover:bg-white/10 text-white">
              Schedule Demo
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
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 rounded-md overflow-hidden bg-black/10 border border-black/20">
                  <img 
                    src="/logo.jpg" 
                    alt="Attyn Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg font-bold text-black tracking-tight">attyn</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Intelligent hierarchical task management that respects your organization's structure and delivers unprecedented visibility.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-black mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-black mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-black mb-4 text-sm">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              © 2025 Attyn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}