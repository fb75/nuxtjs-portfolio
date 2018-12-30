<template>
	<div class="form-container">
    <form @submit="sendForm">
    <h3>Leave an email for any other information.</h3>
      <label><strong>name</strong></label><input type="text" v-model="name"> 
      <label><strong>email</strong></label><input type="text" v-model="email">
      <label><strong>message</strong></label><textarea v-model="msg"></textarea> 
      <button class="cta">Send</button>
    </form>
	</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      msg: "",
      check: false
    };
  },
  methods: {
    // show(event) {
    //   if (!this.check) {
    //     this.check = !this.check;
    //   }
    // },
    sendForm() {
      return axios
        .post("/api/contact", {
          name: this.name,
          email: this.email,
          msg: this.msg
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => console.log(e));
      // try {
      //   await axios.post('/api/contact', {
      //     name: this.name,
      //     email: this.email,
      //     msg: this.msg
      //   })
      // await new Promise(resolve => setTimeout(resolve, 2500))
      // } catch (e) {
      //   console.error(e)
      // }
    }
  }
};
</script>

<style scoped>
.form-container {
  width: 100%;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  font-family: "Mono Space";
  font-size: 12px;
  background: none;
}
p {
  /*margin: 1em 0;*/
}

form {
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: auto;
  text-align: center;
  font-size: 1em;
  padding: 1em;
  margin: 0 auto;
}

label {
  padding: 0.5em;
  margin: 0 1.5em;
  align-self: end;
}
input {
  width: 85%;
  height: 2em;
  font-family: inherit;
  font-size: inherit;
  padding: 0 1em;
  margin-bottom: 1.5em;
  border: 1px solid #007EA7;
  color: #00171F;
  border-radius: 999px;
  background:  #FFF;
  transition: all 0.5s ease-in-out;
}

input[type="text"]:focus, textarea:focus {
  outline: none;
}

textarea {
  width: 85%;
  height: 120px;
  font-size: 12px;
  padding: 0 1em;
  border: 1px solid #007EA7;
  border-radius: 5px;
  color: #00171F;
}

input:focus, textarea:focus {
  background: #00171F;
  color: #00A8E8;
}

.cta {
  display: block;
  color: #fff;
  background: #003459;
  border: none;
  padding: 1em 0;
  width: 90%;
  font-size: 1em;
  text-align: center;
  font-family: 'Mono Space';
  font-weight: bold;
  border-radius: 50px;
  margin: 3em auto 0 auto;
}
@media only screen and (min-width: 768px) {
  .form-container {
    padding: 0;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    /*width: 100%;*/
    /*text-align: center;*/
  }
  
  form {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto auto auto;
    padding: 0;
    grid-gap: 1em;
    justify-items: center;
  
  }
  /*.felem {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto auto auto;
    padding: 0;
    grid-gap: 1em;
    justify-items: center;
  }*/
  h3 {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  label {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  input {
    grid-column-start: 2;
    grid-column-end: 3;
    height: 2.5em;
    align-self: center;
    margin: 1em auto;
  }

  textarea {
    grid-column-start: 2;
    grid-column-end: 3;
    padding: 1em;
    margin: 1em auto;
    border-radius: 5px;
  }

  label {
    text-align: center;
    justify-self: end;
    align-self: center;
    color: black;
  }

  .cta {
    grid-column-start: 2;      
    grid-column-end: 3;      
    width: stretch;
    cursor: pointer;
    text-decoration: none;
    padding: 1em 1em;
    font-size: 1em;
    text-align: center;
    font-weight: bold;
    border-radius: 50px;
    margin: 1em auto;
  }
}
</style>