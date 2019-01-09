<template>
  <div class="form-container">
    <form @submit="sendForm">
      <h3>Leave an email for any other information.</h3>
      <transition name="fade" mode="out-in">
        <label :class="{invalid2: $v.name.$error}" :key="$v.name.$error">
          <strong>name</strong>
          <transition name="slideup" mode="out-in">
            <fa
              style="color: #ff8500; margin-left: .2em"
              :icon="faCheck"
              v-if="!$v.name.$invalid"
              :key="$v.name.invalid"
            />
          </transition>
        </label>
      </transition>
      <transition name="slideup2" mode="out-in">
        <small 
          id="insname" 
          :key="!$v.name.minLen" 
          v-if="!$v.name.required">Please insert your name.</small>
      </transition>
      <transition name="slideup2" mode="out-in">
        <small
          id="reqname"
          :key="!$v.name.required"
          v-if="!$v.name.minLen"
        >Your name should be at least 3 letters</small>
      </transition>
      <input :class="{invalid: $v.name.$error}" @blur="$v.name.$touch()" type="text" v-model="name">
      <transition name="slideup" mode="out-in">
        <label :class="{invalid2: $v.email.$error}" :key="$v.email.$error">
          <strong>email</strong>
          <transition name="slideup" mode="out-in">
            <fa
              style="color: #ff8500; margin-left: .2em"
              :icon="faCheck"
              v-if="!$v.email.$invalid"
              :key="$v.email.$invalid"
            />
          </transition>
        </label>
      </transition>
      <transition name="slideup2" mode="out-in">
        <small 
          id="validemail"
          v-if="$v.email.$invalid" 
          :key="!$v.email.$invalid">Insert a valid email address.</small>
      </transition>
      <input
        type="email"
        :class="{invalid: $v.email.$error}"
        @blur="$v.email.$touch()"
        v-model="email"
      >
      <transition name="slideup" mode="out-in">
        <label :class="{invalid2: $v.msg.$error}" :key="$v.msg.$error">
          <strong>message</strong>
          <transition name="slideup2" mode="out-in">
            <fa 
              :icon="faCheck" 
              :key="$v.msg.$invalid" 
              style="margin-left: 0.2em; color: #ff8500"
              v-if="!$v.msg.$invalid"/>
          </transition>
        </label>
      </transition>
      <transition name="slideup2" mode="out-in">
        <small 
          id="msgrequired"
          :key="$v.msg.required" 
          v-if="!$v.msg.required">Please enter a message.</small>
      </transition>
      <transition name="slideup2" mode="out-in">
        <small
          id="msgmaxlen"
          :key="!$v.msg.maxLen"
          v-if="!$v.msg.maxLen"
        >Message can be maximum {{ $v.msg.$params.maxLen.max }} characters.</small>
      </transition>
      <transition name="slideup2" mode="out-in">
        <small
          id="msgminlen"
          :key="!$v.msg.minLen"
          v-if="!$v.msg.minLen"
        >Message should be minimum {{ $v.msg.$params.minLen.min }} characters.</small>
      </transition>
      <textarea
        v-model="msg"
        class="valid"
        :class="{invalid: $v.msg.$error}"
        @blur="$v.msg.$touch()"
      ></textarea>
      <transition name="slideup" mode="out-in">
        <button :key="!$v.invalid" :disabled="$v.$invalid" class="cta">Send</button>
      </transition>
    </form>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  maxLength,
  minLength
} from "vuelidate/lib/validators";
import axios from "axios";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      name: "",
      email: "",
      msg: "",
      check: false
    };
  },
  computed: {
    faCheck() {
      return faCheck;
    }
  },
  validations: {
    name: {
      required,
      minLen: minLength(3)
    },
    email: {
      email,
      required
    },
    msg: {
      required,
      maxLen: maxLength(150),
      minLen: minLength(10)
    }
  },
  methods: {
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
  margin: 3em auto;
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
  border: 1px solid #007ea7;
  color: #00171f;
  border-radius: 999px;
  background: #fff;
  transition: all 1s ease-in-out;
  z-index: 200;
}

.valid {
  width: 85%;
  height: 120px;
  font-size: 12px;
  padding: 0 1em;
  border: 1px solid #007ea7;
  border-radius: 5px;
  color: #00171f;
}

input:focus,
textarea:focus {
  background: #00171f;
  color: #00a8e8;
  outline: none;
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
  font-family: "Mono Space";
  font-weight: bold;
  border-radius: 50px;
  margin: 3em auto 0 auto;
  z-index: 200;
}

.cta[disabled] {
  background: transparent;
  border: 1px solid #003459;
  color: #003459;
  cursor: not-allowed;
}

small {
  color: #003459;
}

/*small#insname {
  position: absolute;
  top: 48%;
  border-radius: 50px;
  padding: .3em;
  background: #ff8500;
  z-index: 0;
}

small#reqname {
  position: absolute;
  top: 48%;
  left: 31.8%;
  border-radius: 50px;
  padding: .3em;
  background: #ff8500;
  z-index: 0;
}

small#validemail {
  position: absolute;
  top: 59.8%;
  left: 44%;
  border-radius: 50px;
  padding: .3em;
  background: #ff8500;
  z-index: 0;
}

small#msgrequired {
  position: absolute;
  top: 71.5%;
  left: 53.3%;
  border-radius: 50px;
  padding: .3em;
  background: #ff8500;
  z-index: 0;
}

small#msgminlen {
  position: absolute;
  top: 71.5%;
  left: 29%;
  border-radius: 50px;
  padding: .3em;
  background: #ff8500;
  z-index: 0;
}

small#msgmaxlen {
  position: absolute;
  top: 71.5%;
  left: 30%;
  border-radius: 50px;
  padding: .3em;
  background: #ff8500;
  z-index: 0;
}*/

.invalid {
  filter: drop-shadow(0 5px 10px #ff8500);
  border: 1px solid #ff8500;
  /*transform: translateY(-10%);*/
  color: black;
}
.invalid2 {
  filter: drop-shadow(0 5px 10px #ff8500);
  color: #9B1B00;
}

.check {
  color: green;
}

@media only screen and (min-width: 768px) {
  .form-container {
    padding: 0;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto auto auto;
    padding: 0;
    grid-gap: .5em;
    justify-items: center;
  }

  .check {
    grid-column-start: 1;
    grid-column-end: 1;
  }

  h3 {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  label {
    grid-column-start: 1;
    grid-column-end: 2;
    justify-self: end;
    align-self: center;
    text-align: center;
    color: black;
  }

  input {
    grid-column-start: 2;
    grid-column-end: 3;
    height: 2.5em;
    align-self: center;
    margin: 0.3em auto;
  }

  textarea {
    grid-column-start: 2;
    grid-column-end: 3;
    padding: 1em;
    margin: 1em auto;
    border-radius: 5px;
  }

  small {
    grid-column-start: 2;
    grid-column-end: 2;
    justify-self: center;
    align-self: center;
  }
  
/*  small#insname {
    top: 34%;
    left: 52%;
  }

  small#reqname {
    top: 34%;
    left: 46%;
  }

  small#validemail {
    top: 42.5%;
    left: 50%;
  }

  small#msgrequired {
    top: 52%;
    left: 52%
  }

  small#msgminlen {
    top: 52%;
    left: 47%;
  }

  small#msgmaxlen {
    top: 52%;
    left: 47%;
  }*/

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
    transition: all 1s ease-in-out;
  }


}
</style>