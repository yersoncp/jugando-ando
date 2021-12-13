import firebase from 'firebase'
import { uuid } from 'uuidv4';

const CreateSort = () => {
    const handleCreateSort = () => {
        const key = uuid();
        firebase.database().ref(`events/${key}`).set({
            emailList: [],
            wishList: []
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