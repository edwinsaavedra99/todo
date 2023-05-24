import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import { api } from '../../../envd';

interface NotesType {
    id: number | any;
    color: string;
    title: string;
    description: string;
    date: Date | any;
    deleted?: boolean;
    isCompleted: boolean;
}

interface noteType {
    notes: NotesType[];
    notesContent: number;
    noteSearch: string;
    filterCompleted: boolean;
    timeout: any;
}

export const useNoteStore = defineStore({
    id: 'notes',
    state: (): noteType => ({
        notes: [],
        notesContent: -1,
        noteSearch: '',
        filterCompleted: false,
        timeout: null
    }),
    actions: {
        async fetchNotes() {
            try {
                let url =  api + '/tasks';
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
                await axios.post(api + '/tasks', body);
                if (this.filterCompleted) {
                    this.filterCompletedUpdate();
                }
                this.fetchNotes();
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
                await axios.delete(api + '/tasks/' + itemID);
                this.fetchNotes();
            } catch (error) {
                alert(error);
            }
        },
        async deleteCompletes(){
            try {
                await axios.delete(api + '/tasks/completed');
                this.fetchNotes();
            } catch (error) {
                alert(error);
            }
        },
        async updateState(itemID: number, isCompleted: boolean) {
            try {
                await axios.put(api + '/tasks/'+itemID, {
                    ...this.notes.find((item)=> { return item.id == itemID}),
                    isCompleted: isCompleted
                });
                this.fetchNotes();
            } catch (error) {
                alert(error);
            }
        },
        async updateNote(body: any, itemColor: any) {
            try {
                await axios.put(api + '/tasks/'+body.id, {
                    ...this.notes.find((item)=> { return item.id == body.id}),
                    color: itemColor
                });
                this.fetchNotes();
            } catch (error) {
                alert(error);
            }
        },
        async updateNoteBody(body: any) {
            if (body === undefined) {
                return;
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(async () => {
                try {
                    await axios.put(api + '/tasks/' + body.id, body);
                    this.fetchNotes();
                } catch (error) {
                    alert(error);
                }
            }, 1000);
        }
    }
});
