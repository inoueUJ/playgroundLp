import { Card } from "@/components/ui/card";
import { profiles } from "@/constants/profile";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white px-4 pt-24">
      <h1 className="mb-24 text-center font-light text-4xl tracking-wider">
        PROFILE
      </h1>

      <div className="mx-auto mb-24 max-w-4xl">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/thema.jpeg"
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
                {profile.image ? (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <Image
                    src="/placeholder.svg"
                    alt={profile.name}
                    className="object-cover"
                    width={400}
                    height={400}
                  />
                )}
                <div className="absolute top-4 left-4">
                  <div className="font-light text-amber-400 text-lg">
                    {profile.instruments}
                  </div>
                  <h2 className="font-bold text-2xl text-white">
                    {profile.name}
                  </h2>
                </div>
              </div>
              <div className="space-y-4 p-6">
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

                <div className="flex justify-end space-x-4 pt-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
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
