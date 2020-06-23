import axios from 'axios';

export default class FirebaseApiService {
    host = process.env.REACT_APP_DB_URL;

    fetchNotes = async () => {
        const res = await axios.get(`${this.host}/notes.json`);

        return await res.data;
    }

    saveNote = async (note) => {
        const res = await axios.post(`${this.host}/notes.json`, note).catch((e) => {
            throw new Error(`Couldn't create note!`);
        });

        return await res.data;
    };
}