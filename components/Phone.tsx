import {Home , Sparkle , Shapes , Library} from "lucide-react"
import Link from "next/link"
export default function Phone() {
 
  return (
    <div className="desktop:hidden fixed bottom-0 bg-background text-foreground h-18 w-full flex gap-5 px-4 md:px-30">
      <Link href="" className="flex-1 flex flex-col justify-center items-center gap-2">
        <Home />
        <span className="text-xs">خانه</span>
      </Link>
      <Link href="" className="flex-1 flex flex-col justify-center items-center gap-2">
        <Sparkle />
        <span className="text-xs">فیدی پلاس</span>
      </Link>
      <Link href="" className="flex-1 flex flex-col justify-center items-center gap-2">
        <Shapes />
        <span className="text-xs">دسته بندی</span>
      </Link>
      <Link href="" className="flex-1 flex flex-col justify-center items-center gap-2">
        <Library />
        <span className="text-xs">کتابخانه</span>
      </Link>
    </div>
  )
}
