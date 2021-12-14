import firebase from '../app/firebase'
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { FC } from 'react';
import { IUser } from '../app/interfaces';

type IProps = {
  id: string,
  user: IUser
}

type Inputs = {
  description: string,
};

const CreateWhishlist: FC<IProps> = ({ id, user }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const key = v4();
    firebase.database().ref(`events/${id}/wishList/${key}`).set({
      name: user.name,
      email: user.email,
      description: data.description
    }).finally(() => {
      setValue('description', '');
    })
  }
  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="items">
        <input
          {...register("description", { required: true })}
          className={errors?.description ? "control control-wishlist error" : "control control-wishlist"}
          placeholder="¿Qué quieres que te regalen?"
          />
        <button className="button">Agregar</button>
      </div>
    </form>
  </>
}
export default CreateWhishlist