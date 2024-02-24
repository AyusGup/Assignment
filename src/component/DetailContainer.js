import react from 'react';

export default function DetailContainer(props){
    return(
      <div className='flex-col space-y-6 text-[1.4rem] text-white'>
        <div className='flex flex-wrap space-x-2'>
            <p className='font-bold text-black'>Name:</p>
            <p>{props.name.title}</p>
            <p>{props.name.first}</p>
            <p>{props.name.last}</p>
        </div>
        <div className='flex flex-wrap space-x-2'>
            <p className='font-bold text-black'>Gender:</p>
            <p>{props.gender}</p>
        </div>
        <div className='flex flex-wrap space-x-2'>
            <p className='font-bold text-black'>Phone:</p>
            <p>{props.phone}</p>
        </div>
      </div>
    );
}