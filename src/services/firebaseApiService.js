import axios from 'axios';

export default class FirebaseApiService {
    host = process.env.REACT_APP_DB_URL;

    saveNote = async (note) => {
        const res = await axios.post(`${this.host}/notes.json`, note).catch((e) => {
            throw new Error(`Couldn't create note!`);
        });

        return await res.data;
    };
}