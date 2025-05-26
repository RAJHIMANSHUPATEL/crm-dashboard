import React from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

function TodoList() {
    return (
        <div className="">
            Calender
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
