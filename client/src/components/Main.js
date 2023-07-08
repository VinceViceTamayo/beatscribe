import React from "react"

import { CloudArrowUpIcon, UserGroupIcon, MusicalNoteIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Extensive Music Library',
    description:
      'Offer a vast and diverse collection of songs, albums, and playlists from various genres and artists. Ensure that your app includes popular hits, classic tunes, emerging artists, and a wide range of music to cater to different tastes and preferences.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Personalized Recommendations',
    description:
    `Implement an intelligent recommendation system that suggests personalized music based on users' listening history, preferences, and behavior. Utilize algorithms to create tailored playlists, suggest similar artists, and introduce users to new tracks they might enjoy, enhancing their discovery experience.`,
    icon: UserIcon,
  },
  {
    name: 'Offline Listening',
    description:
      `Enable users to download their favorite songs, albums, or playlists for offline listening. This feature allows users to enjoy music even when they are in areas with poor network connectivity or during times when they don't have access to the internet, providing convenience and flexibility.`,
    icon: MusicalNoteIcon,
  },
  {
    name: 'Social Sharing and Collaboration',
    description:
      'Foster a sense of community by integrating social sharing and collaboration features. Users should be able to share their favorite songs or playlists with friends and followers on social media platforms. Additionally, consider implementing collaborative playlist functionality, allowing users to create and curate playlists together with friends, fostering a sense of shared music discovery and engagement.',
    icon: UserGroupIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-gray-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Experience music without boundaries
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Immerse yourself in the power of music as you create personalized playlists, follow your favorite artists, and embark on a sonic journey like never before. Whether you're seeking the perfect soundtrack for a workout session, a road trip, or simply to unwind after a long day, we've got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
