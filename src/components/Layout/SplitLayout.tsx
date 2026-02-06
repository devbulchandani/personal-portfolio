import ProfileSidebar from "@/components/Sidebar/ProfileSidebar";

export default function SplitLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen relative flex flex-col lg:flex-row">
            {/* Mobile Header / Nav would go here if we were responsive-first, but for now Sidebar handles desktop */}

            {/* Fixed Sidebar */}
            <div className="w-full lg:w-[350px] XL:w-[400px] shrink-0">
                <ProfileSidebar />
            </div>

            {/* Main Scrolling Content */}
            <main className="flex-1 w-full min-h-screen py-10 px-6 lg:px-12 xl:px-20 overflow-x-hidden">
                {children}
            </main>
        </div>
    )
}
