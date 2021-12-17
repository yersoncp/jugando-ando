import { IUser, IWishList } from '../../app/interfaces'
import { FC } from 'react'
import { groupByKey } from '../../app/utils/utils'
import firebase from '../../app/firebase'
import s from './ListWishlist.module.css'

type IProps = {
  whislist: IWishList[],
  id: string,
  user: IUser
}

const ListWishlist: FC<IProps> = ({ whislist, id, user }) => {
  const wishlistGroup = groupByKey(whislist, 'name')
  const handleDeleteWishlist = (wishlistId: string) => {
    firebase.database().ref(`events/${id}/wishList/${wishlistId}`).remove()
  }

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
                  myWishlist.map((w: IWishList) => <li className="list-wishlist__item" key={w.id}>
                    <span className="whislist-item-name">{w.description}</span>
                    {
                      w.email === user.email &&
                      <button className={s.buttonDelete} onClick={() => handleDeleteWishlist(w.id)}>
                        x
                      </button>
                    }
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