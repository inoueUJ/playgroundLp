import { Card } from "@/components/ui/card";
import { profiles } from "@/constants/profile";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white px-4 pt-24">
      <h1 className="mb-24 text-center font-light text-4xl tracking-wider">
        PROFILE
      </h1>

      <div className="mx-auto mb-24 max-w-4xl">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/profile_top.webp"
            alt="Band Profile"
            className="object-cover"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 font-bold text-3xl">Boss baby</h2>
        <p className="mb-8 text-lg">
          平均年齢22歳、福岡発・3ピースギターロックバンド
        </p>
        <p className="italic">"喝だらけで予備だらけの日常を歌う"</p>
      </div>

      <div className="container mx-auto py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden bg-white">
              <div className="relative aspect-square">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="text-center">
                  <h2 className="mb-2 font-bold text-3xl text-gray-800">
                    {profile.name}
                  </h2>
                  <div className="font-extrabold text-2xl text-amber-500 uppercase tracking-wider">
                    {profile.instruments}
                  </div>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
                  <div className="rounded-md bg-teal-600 px-4 py-1 text-sm text-white">
                    生年月日
                  </div>
                  <div className="text-sm">{profile.anniversary}</div>

                  <div className="rounded-md bg-teal-600 px-4 py-1 text-sm text-white">
                    星座
                  </div>
                  <div className="text-sm">{profile.constellation}</div>

                  <div className="rounded-md bg-teal-600 px-4 py-1 text-sm text-white">
                    血液型
                  </div>
                  <div className="text-sm">{profile.bloodType}</div>

                  <div className="rounded-md bg-teal-600 px-4 py-1 text-sm text-white">
                    出身地
                  </div>
                  <div className="text-sm">{profile.birthplace}</div>

                  <div className="rounded-md bg-teal-600 px-4 py-1 text-sm text-white">
                    趣味
                  </div>
                  <div className="text-sm">{profile.hobbies}</div>
                </div>

                <div className="flex justify-end pt-4">
                  <a
                    href={profile.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
