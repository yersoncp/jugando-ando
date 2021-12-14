import firebase from '../../app/firebase'
import { v4 } from 'uuid';
import { IUser } from '../../app/interfaces';

const CreateSort = () => {
    const user: IUser = {
        name: 'Yerson',
        email: 'yerson.rc@gmail.com',
    }
    const handleCreateSort = (e: any) => {
        e.preventDefault();
        const key = v4();
        firebase.database().ref(`events/${key}`).set({
            emailList: JSON.stringify([user, user, user]),
            wishList: '[]'
        })
    }
    return <>
        <h1>Create Sort</h1>
        <form
            onSubmit={handleCreateSort}
        >
            <button type="submit" className="button">Crear sorteo</button>
        </form>
    </>
}
export default CreateSort