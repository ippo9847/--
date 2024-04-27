<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>APIからのメッセージ: {{ apiMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      apiMessage: ''
    };
  },
  mounted() {
    axios.get('/api/hello')
      .then(response => {
        this.apiMessage = response.data.message;
      })
      .catch(error => {
        console.error('API error:', error);
        this.apiMessage = 'APIエラーが発生しました';
      });
  }
}
</script>
