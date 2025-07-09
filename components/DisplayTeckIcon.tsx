import { cn, getTechLogos } from "@/lib/utils"
import Image from "next/image"

const DisplayTeckIcon = async ({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack)
    return (
        <div className="flex flex-row">
            {techIcons.slice(0, 3).map(({ tech, url }, index) => (
                <div key={index} className={cn("relative group bg-dark-300 rounded-full p-2 flex-center border-2 border-dark-100", index >= 1 && "-ml-3")}>
                    <span className="tech-tooltip">{tech}</span>
                    <Image src={url} alt="tech logo" width={100} height={100} className="size-5" />
                </div>
            ))}
        </div>
    )
}

export default DisplayTeckIcon
