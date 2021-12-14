import { IWishList } from '../app/interfaces';
import { FC } from 'react';
import { groupByKey } from '../app/utils/utils';

type IProps = {
  whislist: IWishList[],
}

const ListWishlist: FC<IProps> = ({ whislist }) => {
  const wishlistGroup = groupByKey(whislist, 'name')
  console.log(1, wishlistGroup)
  return <>
    <div className="list-wishlist">
      <div className="list-wishlist__title">
        Lista de deseos
      </div>
      <div className="list-wishlist__container">
        {
          Object.keys(wishlistGroup).map(key => {
            const myWishlist = wishlistGroup[key]
            return <div key={key} className="list-wishlist__group">
              <div className="list-wishlist__group-title">
                <b>{key}</b>
              </div>
              <ul className='list-wishlist__group-list'>
                {
                  myWishlist.map((w: IWishList, i: string) => <li className="list-wishlist__item" key={w.id}>
                    <span className="whislist-item-name">{w.description}</span>
                  </li>)
                }
              </ul>
            </div>
          })
        }
      </div>

    </div>
  </>
}
export default ListWishlist