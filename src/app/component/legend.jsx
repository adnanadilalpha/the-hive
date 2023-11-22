


export default function legend() {
    return (
<div className=" space-y-3 p-4 w-80 h-32 bg-white  text-black rounded-lg fixed top-28 right-8 z-10">
<div className="flex space-x-3">
         <p className="text-black font-bold">Legend</p>
         <div className="flex justify-center text-center space-x-1">
            <div className="w-6 h-6 bg-green-300"></div>
            <p className="text-sm">low</p>
        </div> 
            <div className="flex justify-center text-center space-x-1">
            <div className="w-6 h-6 bg-sky-300"></div>
            <p className="text-sm">Medium</p>
            </div>    
            <div className="flex justify-center text-center space-x-1">
            <div className="w-6 h-6 bg-orange-400"></div>
            <p className="text-sm">High</p>
            </div>  
        </div>
        <div className="space-y-3">
            <p className="text-black text-base">Annual average precipitation</p>
            <p className="text-black text-sm">MM per year</p>
        </div>
</div>
    )
}