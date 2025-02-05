import Image from "next/image"
import Link from "next/link";
import userAvastar from "@/app/assets/images/avatar-jessica.jpeg"
import { StaticImageData } from "next/image";

interface UserProfile {
    name: string;
    avatar: StaticImageData;
    location: string;
    description: string;
}

const userProfile: UserProfile = {
    name: "Jessica Randall",
    avatar: userAvastar,
    location: "London, United Kingdom",
    description: "Front-end developer and avid reader.",
}

const socialLinks: string[] = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
]

export default function LinksProfile() {
    return (
        <div className="bg-profile-grey-800 flex flex-col justify-center items-center p-10 gap-4 w-32 mobile:w-[375px] desktop:w-[375px] rounded-custom-lg">
            <Image src={userProfile.avatar} alt={userProfile.name} className="w-20 h-20 rounded-full" width={20} height={20} />
            <section className="space-y-2 text-center">
                <h1 className="text-2xl font-bold text-profile-white">{userProfile.name}</h1>
                <address className="text-sm text-profile-green font-bold not-italic">{userProfile.location}</address>
            </section>

            <p className="text-sm text-profile-white py-2">&quot;{userProfile.description}&quot;</p>

            {
                socialLinks.map((link, index) => (
                    <div key={index} className="bg-profile-grey-700 w-full flex justify-center items-center h-12 text-sm font-bold rounded-custom-lg cursor-pointer active:bg-profile-green active:text-profile-grey-700">
                        <Link href="#" className="text-profile-white">{link}</Link>
                    </div>
                ))
            }
        </div>
    )
}