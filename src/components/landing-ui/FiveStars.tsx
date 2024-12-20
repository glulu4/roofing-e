import {StarIcon} from '@heroicons/react/20/solid'
import React from 'react'

export default function FiveStars() {
  return (
      <div className="flex gap-x-1 text-yellow-300">
          <StarIcon aria-hidden="true" className="size-10 flex-none" />
          <StarIcon aria-hidden="true" className="size-10 flex-none" />
          <StarIcon aria-hidden="true" className="size-10 flex-none" />
          <StarIcon aria-hidden="true" className="size-10 flex-none" />
          <StarIcon aria-hidden="true" className="size-10 flex-none" />
      </div>
  )
}
