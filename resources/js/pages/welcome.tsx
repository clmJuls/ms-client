import { Head, Link } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { Package, TrendingUp, Shield, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Welcome({ canRegister = true, auth }: { canRegister?: boolean; auth: any }) {
    return (
        <>
            <Head title="Welcome" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Navigation */}
                <nav className="relative z-10 border-b border-white/10 backdrop-blur-sm bg-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-3">
                                <img src="/logoMS.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow-lg" />
                                <span className="text-white font-bold text-xl">Inventory System</span>
                            </div>
                            <div className="flex items-center gap-3">
                                {auth.user ? (
                                    <Link href={dashboard()}>
                                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                            Dashboard
                                        </Button>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={login()}>
                                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                                Log in
                                            </Button>
                                        </Link>
                                        {canRegister && (
                                            <Link href={register()}>
                                                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                                    Get Started
                                                </Button>
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <img src="/logoMS.png" alt="Logo" className="w-40 h-40 object-contain drop-shadow-2xl" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Modern Inventory
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Management System
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Streamline your inventory operations with our powerful, intuitive platform. 
                            Track stock, manage suppliers, and gain insights in real-time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg h-14 px-8">
                                        Go to Dashboard
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    {canRegister && (
                                        <Link href={register()}>
                                            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg h-14 px-8">
                                                Start Free Trial
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </Link>
                                    )}
                                    <Link href={login()}>
                                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg h-14 px-8">
                                            Sign In
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Package,
                                title: 'Product Management',
                                description: 'Easily track and manage your entire product catalog',
                                color: 'from-blue-500 to-blue-600'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Real-time Analytics',
                                description: 'Get instant insights into your inventory performance',
                                color: 'from-green-500 to-emerald-600'
                            },
                            {
                                icon: Shield,
                                title: 'Secure & Reliable',
                                description: 'Enterprise-grade security for your business data',
                                color: 'from-purple-500 to-purple-600'
                            },
                            {
                                icon: BarChart3,
                                title: 'Smart Reports',
                                description: 'Generate detailed reports with just one click',
                                color: 'from-orange-500 to-red-600'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Why Choose Our Platform?
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        'Intuitive dashboard with real-time updates',
                                        'Automated low stock alerts',
                                        'Multi-warehouse support',
                                        'Comprehensive reporting tools',
                                        'Mobile-friendly interface',
                                        '24/7 customer support'
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-200">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-30"></div>
                                    <img src="/logoMS.png" alt="Platform" className="relative w-80 h-80 object-contain drop-shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
                    <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/20 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Inventory?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of businesses already using our platform to streamline their operations.
                        </p>
                        {!auth.user && canRegister && (
                            <Link href={register()}>
                                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg h-14 px-8 font-semibold">
                                    Get Started Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <img src="/logoMS.png" alt="Logo" className="w-8 h-8 object-contain" />
                                <span className="text-gray-400 text-sm">© 2025 Inventory System. All rights reserved.</span>
                            </div>
                            <div className="text-gray-400 text-sm">
                                Built with modern technology
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </>
    );
}
