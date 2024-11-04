'use client'
 
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CategoryDropDown({ Category }) {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();
    function handleSelectCategory (Cate){
  const params = new URLSearchParams(searchParams)
  if(Cate){
    params.set('Category',Cate)
  }else{
    params.delete('Category')
  }
  replace(`${pathname}?${params.toString()}`);


    }

    return (
        <Select onValueChange={handleSelectCategory}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select  Category" />
            </SelectTrigger>
            <SelectContent>
                {Category?.map((data, index) => {
                    return (
                        <SelectItem key={index} value={data._id}>{data.title}</SelectItem>

                    )

                })}

            </SelectContent>
        </Select>

    )
}