import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import type { Faculty } from "../homepage/services/FacultyApi";
import { fetchFaculty } from "../homepage/services/FacultyApi";
import DashboardSkeleton from './DashboardSkeleton'

export default function Dashboard() {
    const {id}= useParams<{id:string}>()
    const [faculty,setFaculty]=useState<Faculty| null>(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const start=Date.now()
        fetchFaculty().then((list: Faculty[])=>{
           
            const found =list.find((f)=>String(f.id)===String(id)) ?? null
            setFaculty(found)
        }).finally(()=>{
            const elapsed=Date.now()-start
            const minTime=2000
            setTimeout(()=>setLoading(false),
          Math.max(0,minTime-elapsed))
  
        })
    },[id])
    if(loading){
        return <DashboardSkeleton></DashboardSkeleton>
    }
    if(!faculty){
        return (
             <div className="p-8 text-slate-300">
        داده‌ای برای این عضو پیدا نشد
      </div>
      
        )
    }
  return (

  <section>
<div className="p-8 space-y-6 text-slate-200">
    <h1 className="text-3xl font-bold">{faculty.name}</h1>
    <p className="text-slate-400">{faculty.university}</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat title="H-Index" value={faculty.hIndex} />
        <Stat title="مقالات" value={faculty.publications} />
        <Stat title="استنادات" value={faculty.citations} />
      </div>
      </div>
  </section>
  );
}

function Stat({title,value}:{title:string; value:number}){
    return (
    <div className="bg-[#111827] border border-[#1f2537] rounded-2xl p-6 text-center">
      <p className="text-slate-400">{title}</p>
      <p className="text-2xl font-bold">{value.toLocaleString()}</p>
    </div>
    )
}
