import { IUser } from '../app/interfaces';
import { FC } from 'react';

type IProps = {
  users: IUser[],
}

const ListUser: FC<IProps> = ({ users }) => {
  return <>
    <p>Estás participando en amigos secretos con las siguientes personas:</p>
    {
      users.map(user => <span className="user" key={user.id}>
        {user.name}
      </span>)
    }
  </>
}
export default ListUser