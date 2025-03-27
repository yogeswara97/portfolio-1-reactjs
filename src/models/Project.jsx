// models/Project.js
import app from '../FirebaseConfig';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";


const db = getFirestore(app);
class Project {

    constructor(id, name, description, image, category, createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.category = category;
        this.createdAt = this.formatTimestamp(createdAt);
    }

    formatTimestamp(timestamp) {
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
            return date.toLocaleDateString(); // You can customize this format if needed
        }
        return 'Unknown Date'; // Return a default value if no timestamp is available
    }

    // Method untuk mengambil semua data user dari Firebase
    static async getAllProjects() {
        try {
            const projectsSnapshot = await getDocs(collection(db, 'projects'));
            const projects = [];
            projectsSnapshot.forEach((doc) => {
                const data = doc.data();
                projects.push(new Project(doc.id, data.name, data.description, data.image, data.category, data.createdAt));
            });
            return projects;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    }

    // Method untuk mengambil satu data project berdasarkan ID
    static async getProjectById(id) {
        try {
            const projectDoc = await getDoc(doc(db, 'projects', id));
            if (projectDoc.exists) {
                const data = projectDoc.data();
                return new Project(projectDoc.id, data.name, data.description, data.image, data.category, data.createdAt);
            } else {
                throw new Error('project not found');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
            throw error;
        }
    }

    // Method untuk menyimpan project ke Firebase
    async save() {
        try {
            if (this.id) {
                await db.collection('projects').doc(this.id).set({
                    name: this.name,
                    description: this.description,
                    image: this.image,
                    category: this.category,
                    createdAt: this.createdAt
                });
            } else {
                const newProjectRef = await db.collection('projects').add({
                    name: this.name,
                    description: this.description,
                    image: this.image,
                    category: this.category,
                    createdAt: this.createdAt
                });
                this.id = newProjectRef.id;
            }
        } catch (error) {
            console.error('Error saving project:', error);
            throw error;
        }
    }
}

export default Project;
