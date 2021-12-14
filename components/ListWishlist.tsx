import { IWishList } from '../app/interfaces';
import { FC } from 'react';

type IProps = {
  whislist: IWishList[],
}

const ListWishlist: FC<IProps> = ({ whislist }) => {
  return <>
    <div className="list-wishlist">
      <div className="list-wishlist__title">
        Cosas que quiero que me regalen
      </div>
      <ul>
        {
          whislist.map((w, i) => <li className="list-wishlist__item" key={w.id}>
            <span className="whislist-item-name">{w.name}</span>
            <span className="whislist-item-name">{w.description}</span>
          </li>)
        }
      </ul>
    </div>
  </>
}
export default ListWishlist