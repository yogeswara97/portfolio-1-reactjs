import app from '../FirebaseConfig';
import {  getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

class Chatbot {
    constructor(programing) {
        this.programing = programing;
    }

    // Method untuk mengambil data chatbot berdasarkan ID tertentu
    static async getProgramingDataSet() {
        try {
            // Referensi dokumen dengan ID tertentu di koleksi 'chatbotDataset'
            const chatbotDocRef = collection(db, 'chatbotDataset');

            // Ambil dokumen tersebut
            const querySnapshot = await getDocs(chatbotDocRef);

            const chatbotDataList = []

            querySnapshot.forEach((doc) => {
                chatbotDataList.push ({
                    id: doc.id,
                    ...doc.data()
                })
            })
    
            console.log('Data ditemukan:', chatbotDataList);
            return chatbotDataList; // Kembalikan array data
        } catch (error) {
            console.error('Error fetching chatbot by ID:', error);
            throw error;
        }
    }
}

export default Chatbot;
