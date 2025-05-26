import CardList from "@/components/CardList";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

function page() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">
                            Components
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* Left */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* user badges */}
                    <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
                    {/* Information Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">Info</div>
                    {/* CardList */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* Right */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* User Card Container  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">User Information</div>
                    {/* User Chart Container  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">User Chart</div>
                </div>
            </div>
        </>
    );
}

export default page;
