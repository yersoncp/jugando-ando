import firebase from '../app/firebase'
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { FC } from 'react';

type IProps = {
    id: string,
}

type Inputs = {
    description: string,
};

const CreateWhishlist: FC<IProps> = ({ id }) => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        const key = v4();
        firebase.database().ref(`events/${id}/wishList/${key}`).set({
            user: 'yerson',
            email: 'yerson.rc@gmail.com',
            description: data.description
        })
    }
    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("description")} placeholder="First name" />
            <button className="button">Agregar</button>
        </form>
    </>
}
export default CreateWhishlist