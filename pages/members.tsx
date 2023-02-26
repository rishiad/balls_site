import { membersItems } from '@/components/membersItems';
import { GetStaticProps } from 'next'

export default function Members() {
    return(
    <div className="bg-white h-screen">
     <h1 className="mb-4 ml-10 pt-20 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"> 
          Executive Members
        </h1>

        <div className='pt-20 bg-white flex items-center justify-center'>

       
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4 justify-items-start">
      {membersItems.map((person, index) => (
        <div key={index} className="bg-white">
          <h2 className="text-2xl text-black font-bold">{person.name}</h2>
          <p className="text-gray-500 text-l">{person.role}</p>
        </div>
      ))}
    </div>
    </div>
</div>
    );
}
