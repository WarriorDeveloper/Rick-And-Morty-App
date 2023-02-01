import Card from '../Card/Card'
import Presentation from '../Presentation/Presentation';

import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {

   if(characters.length === 0) return (
      <Presentation/>
   )

   return <div className={style.container}>
      {
         characters.map((character, index) =>
            <Card
            key={index}
            character={character}
            onClose={onClose}
            />
         )
      }
   </div>;
}