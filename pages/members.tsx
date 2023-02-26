import { membersItems } from '@/components/membersItems';
import { GetStaticProps } from 'next'

export default function Members() {
    return(
        <div className=''>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-items-center">
      {membersItems.map((person, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">{person.name}</h2>
          <p className="text-gray-500">{person.role}</p>
        </div>
      ))}
    </div>
</div>
    );
}