"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";

function TodoList() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <h1 className=" font-medium mb-4">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a Date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
            {/* List */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                {/* List Item */}
                <div className="flex flex-col gap-4">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-1" />
                            <label
                                htmlFor="item-1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-2" />
                            <label
                                htmlFor="item-2"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-3" />
                            <label
                                htmlFor="item-3"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-4" />
                            <label
                                htmlFor="item-4"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-5" />
                            <label
                                htmlFor="item-5"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-6" />
                            <label
                                htmlFor="item-6"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-7" />
                            <label
                                htmlFor="item-7"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-8" />
                            <label
                                htmlFor="item-8"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-9" />
                            <label
                                htmlFor="item-9"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                    {/* List Item */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item-10" />
                            <label
                                htmlFor="item-10"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit ame!
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    );
}

export default TodoList;
