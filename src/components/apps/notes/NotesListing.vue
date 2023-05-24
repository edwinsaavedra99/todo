<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useNoteStore } from '@/stores/apps/notes';

const store = useNoteStore();
onMounted(() => {
    store.fetchNotes();
});
const getNotes = computed(() => {
    return store.notes;
});
const checkedTask = function getCompleted(isCompleted: boolean | undefined) {
    if (isCompleted) return 'strikethrough-text';
    return '';
}
const NoteItem = getNotes;
const searchValue = ref('');
const filteredNotes = computed(() => {
    return NoteItem.value.filter((note) => {
        return note.title?.toLowerCase().includes(searchValue.value.toLowerCase());
    });
});
</script>

<template>
    <div class="pa-6">
        <h4 class="text-h4 mb-8">My Tasks</h4>
        <div class="mb-5">
            <v-row class='px-3' align="center" justify="center">
                <v-text-field
                    variant="outlined"
                    v-model="searchValue"
                    append-inner-icon="mdi-magnify"
                    placeholder="Search Tasks"
                    hide-details
                    density="compact"
                />
                <v-btn class='mx-2' density="compact" icon @click='store.filterCompletedUpdate(); store.fetchNotes()'>
                    <v-icon>
                        {{ store.filterCompleted ? 'mdi-filter' : 'mdi-filter-remove' }}
                    </v-icon>
                    <v-tooltip activator="parent" location="top">Filter see only completed</v-tooltip>
                </v-btn>
                <v-btn density="compact" icon @click='store.deleteCompletes()'>
                    <v-icon>
                        mdi-delete-sweep
                    </v-icon>
                    <v-tooltip activator="parent" location="top">Delete Completed</v-tooltip>
                </v-btn>
            </v-row>
        </div>

        <v-sheet
            :class="'note-sheet pa-6 pb-4 rounded-md cursor-pointer mb-4  bg-light' + note.color"
            v-for="note in filteredNotes"
            :key="note.id"
            @click="store.SelectNote(note.id)"
            v-if="filteredNotes.length > 0"
        >
            <h6 :class="checkedTask(note.isCompleted) + ' text-h6 text-truncate text-' + note.color">{{ note.title }}</h6>
            <div class="d-flex mt-3 align-items-center">
                <small v-if='note !== undefined' :class="checkedTask(note.isCompleted) + ' text-subtitle-2 opacity-25'">
                    {{ new Date(note.date).toLocaleDateString() + ' '}}
                    {{ note.isCompleted ? '(COMPLETED)' : '' }}
                </small>
                <div style='margin-left: auto'>
                    <v-btn
                    icon
                    variant="text"
                    class="ml-auto" size="x-small"
                    @click="store.updateState(note.id,!note.isCompleted)"
                >
                    <v-tooltip activator="parent" location="top">Mark Completed</v-tooltip>
                    <v-icon size='18' color="grey-lighten-1">
                        mdi-check-circle
                    </v-icon>
                </v-btn>
                    <v-btn icon variant="text" class="ml-auto" size="x-small" @click="store.deleteNote(note.id)">
                        <v-tooltip activator="parent" location="top">Delete</v-tooltip>
                        <TrashIcon size="18"/>
                    </v-btn>
                </div>

            </div>
        </v-sheet>
        <v-sheet v-if="filteredNotes.length === 0">
            <v-alert type="info" title="Opps" text="The Notes you are looking for is not found"></v-alert>
        </v-sheet>
    </div>
</template>
<style lang="scss">
.note-sheet {
    transition: 0.1s ease-in;
    &:hover {
        transform: scale(1.02);
    }
}
.strikethrough-text {
    text-decoration-line: line-through;
}
</style>
