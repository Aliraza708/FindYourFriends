"use client";
import React, { useRef, useState } from "react";
// import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadImage } from "@/action/uploadImage";
import { addSubCategory } from "@/action/addtosubcategory";
import { useToast } from "@/hooks/use-toast";
// import { uploadImage } from "@/actions/upload";
// import { addCategory } from "@/actions/categories";

export function AddSubCategory({categories}) {
    const [open, setOpen] = useState(false);
    const isDesktop = true;

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline"> Add Sub Category</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            Add Sub Category
                        </DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when {`you're`}{" "}
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm  categories={categories} />
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when done.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

function ProfileForm({ className ,categories }) {
    const formRef = useRef();
    const { toast } = useToast();
  
    const handleAddCategory = async (formData) => {
        const ThumbnailFile = await uploadImage(formData)
      const obj = {
        title: formData.get("title"),
        description: formData.get("description"),
        catgories: formData.get("category"),
        thambnail: ThumbnailFile,
      };
   
      await addSubCategory(obj);
  
      toast({
        title: "Add Sub Category add successfully",
      })
       formRef?.current?.reset()
    };
    return (
        <form
            ref={formRef}
            action={handleAddCategory}
            className={cn("grid items-start gap-4", className)}
        >
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    required
                    name="title"
                    type="title"
                    id="title"
                    placeholder="Sports"
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                    required
                    name="description"
                    id="description"
                    placeholder="About Category"
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Input required name="thumbnail" type="file" />
            </div>
            <div className="grid gap-2">
            <Select name="category">
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select  Category" />
            </SelectTrigger>
            <SelectContent>

                {categories?.map((data, index) => {
                    return (
                        <SelectItem key={index} value={data._id}>{data.title}</SelectItem>

                    )

                })}

            </SelectContent>
        </Select>
            </div>

            <Button type="submit">
                Add Sub Category
            </Button>
        </form>
    );
}