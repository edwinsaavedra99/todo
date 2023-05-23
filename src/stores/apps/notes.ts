import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import { map } from 'lodash';

interface NotesType {
    id?: number | any;
    color?: string;
    title?: string;
    datef?: Date | any;
    deleted?: boolean;
    isCompleted?: boolean;
}

interface noteType {
    notes: NotesType[];
    notesContent: number;
    noteSearch: string;
    filterCompleted: boolean;
}

export const useNoteStore = defineStore({
    id: 'notes',
    state: (): noteType => ({
        notes: [],
        notesContent: 1,
        noteSearch: '',
        filterCompleted: false
    }),
    actions: {
        async fetchNotes() {
            try {
                let url = 'http://127.0.0.1:5000/tasks';
                if(this.filterCompleted) {
                    url += '?isCompleted=true'
                }
                const data = await axios.get(url);
                this.notes = data.data;
            } catch (error) {
                alert(error);
            }
        },
        async addNotes(body: any) {
            try {
                await axios.post('http://127.0.0.1:5000/tasks', body);
                const data = await axios.get('http://127.0.0.1:5000/tasks');
                this.notes = data.data;
            } catch (error) {
                alert(error);
            }
        },
        SelectNote(itemID: number) {
            this.notesContent = itemID;
        },
        filterCompletedUpdate() {
          this.filterCompleted = !this.filterCompleted;
        },
        async deleteNote(itemID: number) {
            try {
                await axios.delete('http://127.0.0.1:5000/tasks/' + itemID);
                const data = await axios.get('http://127.0.0.1:5000/tasks');
                this.notes = data.data;
            } catch (error) {
                alert(error);
            }
        },
        async deleteCompletes(){
            try {
                await axios.delete('http://127.0.0.1:5000/tasks/completed');
                const data = await axios.get('http://127.0.0.1:5000/tasks');
                this.notes = data.data;
            } catch (error) {
                alert(error);
            }
        },
        async updateState(itemID: number, isCompleted: boolean) {
            try {
                await axios.put('http://127.0.0.1:5000/tasks/'+itemID, {
                    ...this.notes.find((item)=> { return item.id == itemID}),
                    isCompleted: isCompleted
                });
                const data = await axios.get('http://127.0.0.1:5000/tasks');
                this.notes = data.data;
            } catch (error) {
                alert(error);
            }
        },
        async updateNote(itemID: number, itemColor: any) {
            try {
                await axios.put('http://127.0.0.1:5000/tasks/'+itemID, {
                    ...this.notes.find((item)=> { return item.id == itemID}),
                    color: itemColor
                });
                const data = await axios.get('http://127.0.0.1:5000/tasks');
                this.notes = data.data;
            } catch (error) {
                alert(error);
            }
        }
    }
});
