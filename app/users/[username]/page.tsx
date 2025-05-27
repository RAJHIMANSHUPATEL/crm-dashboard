import { AppLineChart } from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import { EditUser } from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
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
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50  p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="rounded-full bg-green-500/30 border-1 border-green-500/50  p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50  p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50  p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* Information Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between ">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <Sheet>
                            <SheetTrigger asChild>
                                <Button>Edit User</Button>
                            </SheetTrigger>
                            <EditUser />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile completion</p>
                                <Progress value={66} />
                            </div>
                            <div className="flex item-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>john.doe</span>
                            </div>
                            <div className="flex item-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>john.doe@gmail.com</span>
                            </div>
                            <div className="flex item-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span>+91 7834839874</span>
                            </div>
                            <div className="flex item-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>New York, NY</span>
                            </div>
                            <div className="flex item-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.01</p>
                    </div>
                    {/* CardList */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* Right */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* User Card Container  */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366"/>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>

                            <h1 className="text-xl font-semibold">John Doe</h1>
                        </div>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi consequuntur animi voluptatibus vel asperiores tenetur, nobis blanditiis ducimus non at! Inventore soluta ab ipsum eum omnis beatae rem natus?</p>
                    </div>
                    {/* User Chart Container  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
