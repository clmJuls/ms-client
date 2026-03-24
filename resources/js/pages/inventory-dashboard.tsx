import { Head } from '@inertiajs/react';
import { Card } from '@/components/ui/card';
import { 
    Package, 
    TrendingUp, 
    AlertTriangle, 
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    Plus,
    Search,
    Filter,
    Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type DashboardStats = {
    totalProducts: number;
    lowStock: number;
    totalValue: number;
    recentTransactions: number;
};

type Props = {
    stats: DashboardStats;
};

export default function InventoryDashboard({ stats }: Props) {
    const statCards = [
        {
            title: 'Total Products',
            value: stats.totalProducts.toLocaleString(),
            icon: Package,
            trend: '+12%',
            trendUp: true,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Low Stock Items',
            value: stats.lowStock.toLocaleString(),
            icon: AlertTriangle,
            trend: '-5%',
            trendUp: false,
            color: 'from-orange-500 to-red-600'
        },
        {
            title: 'Inventory Value',
            value: `$${stats.totalValue.toLocaleString()}`,
            icon: DollarSign,
            trend: '+8%',
            trendUp: true,
            color: 'from-green-500 to-emerald-600'
        },
        {
            title: 'Transactions',
            value: stats.recentTransactions.toLocaleString(),
            icon: TrendingUp,
            trend: '+23%',
            trendUp: true,
            color: 'from-purple-500 to-pink-600'
        }
    ];

    return (
        <>
            <Head title="Inventory Dashboard" />
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                {/* Header */}
                <header className="bg-white border-b border-slate-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/logoMS.png" alt="Logo" className="w-10 h-10 object-contain" />
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900">Inventory Dashboard</h1>
                                    <p className="text-sm text-slate-600">Welcome back! Here's your overview</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="outline" size="sm">
                                    <Download className="w-4 h-4 mr-2" />
                                    Export
                                </Button>
                                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Product
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {statCards.map((stat, index) => (
                            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
                                <div className="relative p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                                            {stat.trendUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                            {stat.trend}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-600 mb-1">{stat.title}</p>
                                        <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Search and Filter Bar */}
                    <Card className="mb-6 border-0 shadow-md">
                        <div className="p-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <Input 
                                        placeholder="Search products, SKU, or category..." 
                                        className="pl-10 h-11 border-slate-200 focus:border-purple-500"
                                    />
                                </div>
                                <Button variant="outline" className="h-11">
                                    <Filter className="w-4 h-4 mr-2" />
                                    Filters
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Activity */}
                        <Card className="lg:col-span-2 border-0 shadow-md">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                                                <Package className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium text-slate-900">Product #{item} Updated</p>
                                                <p className="text-sm text-slate-600">Stock adjusted by +50 units</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-slate-600">2 hours ago</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="border-0 shadow-md">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
                                <div className="space-y-3">
                                    <Button className="w-full justify-start h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                                        <Package className="w-5 h-5 mr-3" />
                                        Add New Product
                                    </Button>
                                    <Button className="w-full justify-start h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                                        <TrendingUp className="w-5 h-5 mr-3" />
                                        Stock In
                                    </Button>
                                    <Button className="w-full justify-start h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                                        <AlertTriangle className="w-5 h-5 mr-3" />
                                        View Low Stock
                                    </Button>
                                    <Button className="w-full justify-start h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                                        <Download className="w-5 h-5 mr-3" />
                                        Generate Report
                                    </Button>
                                </div>

                                {/* Low Stock Alert */}
                                <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 border border-red-200">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-red-900 mb-1">Low Stock Alert</p>
                                            <p className="text-sm text-red-700">{stats.lowStock} items need restocking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    );
}
