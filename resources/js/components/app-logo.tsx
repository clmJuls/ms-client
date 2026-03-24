export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-12 items-center justify-center rounded-lg overflow-hidden">
                <img src="/logoMS.png" alt="Logo" className="size-full object-contain" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Inventory System
                </span>
            </div>
        </>
    );
}
