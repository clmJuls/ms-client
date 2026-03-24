import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <>
            <Head title="Register" />
            
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Register Card */}
                <div className="relative w-full max-w-md">
                    <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8">
                        {/* Logo Section */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="mb-4">
                                <img 
                                    src="/logoMS.png" 
                                    alt="Logo" 
                                    className="w-32 h-32 object-contain drop-shadow-2xl"
                                />
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                            <p className="text-gray-300 text-sm">Join us today and get started</p>
                        </div>

                        <Form
                            {...store.form()}
                            resetOnSuccess={['password', 'password_confirmation']}
                            disableWhileProcessing
                            className="space-y-5"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-200 font-medium">
                                            Full Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            name="name"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            placeholder="John Doe"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/50 h-11"
                                        />
                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-200 font-medium">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            tabIndex={2}
                                            autoComplete="email"
                                            placeholder="you@example.com"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/50 h-11"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-gray-200 font-medium">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={3}
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/50 h-11"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation" className="text-gray-200 font-medium">
                                            Confirm Password
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/50 h-11"
                                        />
                                        <InputError message={errors.password_confirmation} />
                                    </div>

                                    <Button
                                        type="submit"
                                        tabIndex={5}
                                        data-test="register-user-button"
                                        className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 mt-2"
                                    >
                                        {processing && <Spinner className="mr-2" />}
                                        {processing ? 'Creating account...' : 'Create Account'}
                                    </Button>

                                    <div className="text-center text-sm text-gray-300">
                                        Already have an account?{' '}
                                        <TextLink href={login()} tabIndex={6} className="text-purple-300 hover:text-purple-200 font-semibold">
                                            Sign in
                                        </TextLink>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
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
