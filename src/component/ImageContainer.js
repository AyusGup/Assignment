import react from 'react';

export default function ImageContainer(props){
    return(
      <img src={props.url} alt='photo'className='w-64 h-80 border rounded-md' />
    );
}