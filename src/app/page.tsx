// src/app/page.tsx

'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';
import { Shield, Users, Lock, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'JWT-based authentication with encrypted passwords and secure session management.',
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete CRUD operations for managing users with role-based access control.',
    },
    {
      icon: Lock,
      title: 'Role-Based Access',
      description: 'Separate admin and user roles with protected routes and permissions.',
    },
    {
      icon: Zap,
      title: 'Modern Stack',
      description: 'Built with Next.js 14, TypeScript, Tailwind CSS, and PostgreSQL.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Next.js 14 + PostgreSQL + JWT Auth
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-slate-900 dark:text-white">Modern</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              User Management
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A complete authentication and user management system with admin panel,
            role-based access control, and beautiful dark mode UI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {!loading && (
              <>
                {user ? (
                  <Link href={user.role === 'ADMIN' ? '/admin' : '/dashboard'}>
                    <Button size="lg" className="group">
                      Go to {user.role === 'ADMIN' ? 'Admin Panel' : 'Dashboard'}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/signup">
                      <Button size="lg" className="group">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button variant="outline" size="lg">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Admin credentials hint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative p-8 rounded-2xl bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-violet-600/10 border border-violet-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Demo Admin Access
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Use these credentials to explore the admin panel:
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <code className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-mono text-violet-600 dark:text-violet-400">
                  admin@example.com
                </code>
                <code className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-mono text-violet-600 dark:text-violet-400">
                  1234
                </code>
              </div>
            </div>
            <Link href="/login">
              <Button variant="secondary">
                Try Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
