import Image from "next/image";
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

// const socialLinks: string[] = [
//     "GitHub",
//     "Frontend Mentor",
//     "LinkedIn",
//     "Twitter",
//     "Instagram",
// ]
export default function Profile() {
    return (
        <main className="flex flex-col items-center justify-center grow m-5 w-full max-w-sm">
            <div className="text-center flex flex-col items-center bg-profile-grey-800 rounded-xl w-full  p-6 sm:p-10 gap-6">
                <Image
                    className="rounded-full"
                    src={userProfile.avatar} alt={userProfile.name}
                    width={85}
                    height={85}
                />

                <div className="text-center">
                    <h1 className="text-2xl mb-2">{userProfile.name}</h1>
                    <h2 className="text-sm text-profile-green mb-5">
                        {userProfile.location}
                    </h2>
                    <p className="text-sm">{userProfile.description}</p>
                </div>
            </div>
        </main>
    )
}