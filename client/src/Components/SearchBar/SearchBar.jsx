import s from './search.module.css'
import search from '../../assets/searchbar.png';

export default function SearchBar() {
   return (
      <>
      <form className={`${s.content_buscador}`} >
         <input className={`${s.buscador}`} type='search'/>
         <button className={`${s.search_button}`} ><img src={search} alt="" id={s.img_search} /></button>
      </form>
      </>
   );
}
