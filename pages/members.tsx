import { membersItems } from '@/components/membersItems';
import { GetStaticProps } from 'next'

export default function Members() {
    return(
        <div className='h-screen bg-white justify-items-center content-center'>

<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
      {membersItems.map((person, index) => (
        <div key={index} className="bg-white">
          <h2 className="text-xl text-black font-bold">{person.name}</h2>
          <p className="text-gray-500">{person.role}</p>
        </div>
      ))}
    </div>
</div>
    );
}
