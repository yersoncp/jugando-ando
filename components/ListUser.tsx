import { IUser } from '../app/interfaces';
import { FC } from 'react';

type IProps = {
  users: IUser[],
}

const ListUser: FC<IProps> = ({ users }) => {
  return <>
    <p className="mb-20">Estás participando en amigos secretos con las siguientes personas:</p>
    <div className="items mb-30">
      {
        users.map(user => <span className="list-user__item" key={user.id}>
          {user.name}
        </span>)
      }
    </div>
  </>
}
export default ListUser