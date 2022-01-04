<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messages">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection.js";
import { formatDistanceToNow } from "date-fns";
import { computed } from "@vue/reactivity";
import { onUpdated } from '@vue/runtime-core';
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const { documents, error } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return {
            ...doc,
            createdAt: time,
          };
        });
      }
    });

    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    })

    return {
      documents,
      error,
      formattedDocuments,
      messages
    };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
