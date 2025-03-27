// models/Project.js
import app from '../FirebaseConfig';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc, addDoc } from "firebase/firestore";

const db = getFirestore(app);

class Experience {
    constructor(id, title, type, start, end, company, desc) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.start = this.formatTimestamp(start);
        this.end = this.formatTimestamp(end);
        this.company = company;
        this.desc = desc;
    }

    formatTimestamp(timestamp) {
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
            return date.toLocaleDateString(); // You can customize this format if needed
        }
        return 'Unknown Date'; // Return a default value if no timestamp is available
    }

    // Method untuk mengambil semua data experience dari Firebase
    static async getAllExperiences() {
        try {
            const experiencesSnapshot = await getDocs(collection(db, 'experiences'));
            const experiences = [];
            experiencesSnapshot.forEach((doc) => {
                const data = doc.data();
                experiences.push(new Experience(
                    doc.id,
                    data.title,
                    data.type,
                    data.start,
                    data.end ?? 'Now',
                    data.company,
                    data.desc
                ));
            });
            return experiences;
        } catch (error) {
            console.error('Error fetching experiences:', error);
            throw error;
        }
    }

    // Method untuk mengambil satu data experience berdasarkan ID
    static async getExperienceById(id) {
        try {
            const experienceDoc = await getDoc(doc(db, 'experiences', id));
            if (experienceDoc.exists()) {
                const data = experienceDoc.data();
                return new Experience(
                    experienceDoc.id,
                    data.title,
                    data.type,
                    data.start,
                    data.end ?? 'Now',
                    data.company,
                    data.desc
                );
            } else {
                throw new Error('Experience not found');
            }
        } catch (error) {
            console.error('Error fetching experience:', error);
            throw error;
        }
    }

    // Method untuk menyimpan experience ke Firebase
    async save() {
        try {
            if (this.id) {
                // Jika ID ada, perbarui dokumen
                await setDoc(doc(db, 'experiences', this.id), {
                    title: this.title,
                    type: this.type,
                    start: this.start,
                    end: this.end,
                    company: this.company,
                    desc: this.desc
                });
            } else {
                // Jika ID tidak ada, buat dokumen baru
                const newExperienceRef = await addDoc(collection(db, 'experiences'), {
                    title: this.title,
                    type: this.type,
                    start: this.start,
                    end: this.end,
                    company: this.company,
                    desc: this.desc
                });
                this.id = newExperienceRef.id;
            }
        } catch (error) {
            console.error('Error saving experience:', error);
            throw error;
        }
    }
}

export default Experience;
