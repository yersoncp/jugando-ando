import { IWishList } from '../app/interfaces';
import { FC } from 'react';

type IProps = {
  whislist: IWishList[],
}

const ListWishlist: FC<IProps> = ({ whislist }) => {
  return <>
    {
      whislist.map((w, i) => <div className="whislist-item" key={w.id}>
        <span className="whislist-item-name">{w.name}</span>
        <span className="whislist-item-name">{w.description}</span>
      </div>)
    }
  </>
}
export default ListWishlist