import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    Download,
    ShoppingCart,
    Users,
    Truck,
    BarChart3
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

export default function Dashboard() {
    const stats = [
        {
            title: 'Total Products',
            value: '2,543',
            change: '+12.5%',
            trend: 'up',
            icon: Package,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950/30'
        },
        {
            title: 'Low Stock Alert',
            value: '23',
            change: '-8.2%',
            trend: 'down',
            icon: AlertTriangle,
            color: 'from-orange-500 to-red-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950/30'
        },
        {
            title: 'Total Revenue',
            value: '$45,231',
            change: '+23.1%',
            trend: 'up',
            icon: DollarSign,
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50 dark:bg-green-950/30'
        },
        {
            title: 'Orders Today',
            value: '156',
            change: '+18.7%',
            trend: 'up',
            icon: ShoppingCart,
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950/30'
        }
    ];

    const recentActivity = [
        { id: 1, action: 'Stock Added', product: 'Laptop Dell XPS 15', quantity: '+50 units', time: '2 mins ago', type: 'in' },
        { id: 2, action: 'Order Fulfilled', product: 'iPhone 14 Pro', quantity: '-15 units', time: '15 mins ago', type: 'out' },
        { id: 3, action: 'Stock Added', product: 'Samsung Galaxy S23', quantity: '+30 units', time: '1 hour ago', type: 'in' },
        { id: 4, action: 'Low Stock Alert', product: 'MacBook Air M2', quantity: '5 units left', time: '2 hours ago', type: 'alert' },
        { id: 5, action: 'Order Fulfilled', product: 'iPad Pro 12.9', quantity: '-8 units', time: '3 hours ago', type: 'out' }
    ];

    const topProducts = [
        { name: 'Laptop Dell XPS 15', stock: 145, sold: 89, revenue: '$125,430' },
        { name: 'iPhone 14 Pro', stock: 234, sold: 156, revenue: '$98,750' },
        { name: 'Samsung Galaxy S23', stock: 189, sold: 134, revenue: '$87,320' },
        { name: 'MacBook Air M2', stock: 67, sold: 78, revenue: '$76,540' },
        { name: 'iPad Pro 12.9', stock: 98, sold: 65, revenue: '$54,890' }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            
            <div className="flex flex-col gap-6 p-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Inventory Dashboard</h1>
                        <p className="text-muted-foreground mt-1">Welcome back! Here's your inventory overview</p>
                    </div>
                    <div className="flex gap-3">
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

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                            <div className={`absolute inset-0 ${stat.bgColor} opacity-50`}></div>
                            <div className="relative p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className={`flex items-center gap-1 text-sm font-semibold ${
                                        stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                    }`}>
                                        {stat.trend === 'up' ? 
                                            <ArrowUpRight className="w-4 h-4" /> : 
                                            <ArrowDownRight className="w-4 h-4" />
                                        }
                                        {stat.change}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Search and Quick Actions */}
                <Card className="border-0 shadow-md">
                    <div className="p-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input 
                                    placeholder="Search products, SKU, or category..." 
                                    className="pl-10 h-11"
                                />
                            </div>
                            <Button variant="outline" className="h-11">
                                <Filter className="w-4 h-4 mr-2" />
                                Filters
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <Card className="lg:col-span-2 border-0 shadow-md">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
                                <Button variant="ghost" size="sm">View All</Button>
                            </div>
                            <div className="space-y-4">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                            activity.type === 'in' ? 'bg-green-100 dark:bg-green-950' :
                                            activity.type === 'out' ? 'bg-blue-100 dark:bg-blue-950' :
                                            'bg-orange-100 dark:bg-orange-950'
                                        }`}>
                                            {activity.type === 'in' ? <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" /> :
                                             activity.type === 'out' ? <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" /> :
                                             <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-foreground truncate">{activity.product}</p>
                                            <p className="text-sm text-muted-foreground">{activity.action} • {activity.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Quick Actions & Stats */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <Card className="border-0 shadow-md">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
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
                                        <BarChart3 className="w-5 h-5 mr-3" />
                                        Generate Report
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Additional Stats */}
                        <Card className="border-0 shadow-md">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-foreground mb-4">Quick Stats</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                        <div className="flex items-center gap-3">
                                            <Users className="w-5 h-5 text-muted-foreground" />
                                            <span className="text-sm text-foreground">Suppliers</span>
                                        </div>
                                        <span className="font-semibold text-foreground">48</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                        <div className="flex items-center gap-3">
                                            <Truck className="w-5 h-5 text-muted-foreground" />
                                            <span className="text-sm text-foreground">Pending Orders</span>
                                        </div>
                                        <span className="font-semibold text-foreground">12</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                                        <div className="flex items-center gap-3">
                                            <Package className="w-5 h-5 text-muted-foreground" />
                                            <span className="text-sm text-foreground">Categories</span>
                                        </div>
                                        <span className="font-semibold text-foreground">24</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Top Products Table */}
                <Card className="border-0 shadow-md">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-foreground">Top Selling Products</h2>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Product Name</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Stock</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Sold</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Revenue</th>
                                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topProducts.map((product, index) => (
                                        <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                                                        <Package className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="font-medium text-foreground">{product.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-foreground">{product.stock}</td>
                                            <td className="py-4 px-4 text-foreground">{product.sold}</td>
                                            <td className="py-4 px-4 font-semibold text-foreground">{product.revenue}</td>
                                            <td className="py-4 px-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    product.stock > 100 ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400' :
                                                    product.stock > 50 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400' :
                                                    'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400'
                                                }`}>
                                                    {product.stock > 100 ? 'In Stock' : product.stock > 50 ? 'Low Stock' : 'Critical'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Card>
            </div>
        </AppLayout>
    );
}
