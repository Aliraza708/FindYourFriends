import AnalyticsChart from "@/components/barchart/barchart";


export default function dashbord(){
    
    return(
        <div>
            <div className="flex w-full justify-between items-center pl-8 p-2">
               <h1 className="font-bold text-xl">Dashbord</h1> 
            </div>
            <AnalyticsChart/>

        </div>
    )
}