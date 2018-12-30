import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      formMessage: [],
      navIsToggled: false,
      backgroundChanged: false,
      sidebarDefaultClass: "antext",
      sidebarClass: "",
      shownPresentation: false,
      pointsAreVisible: false
    },
    mutations: {
      navActive(state) {
        state.navIsToggled = !state.navIsToggled;
      },
      backgroundChange(state){
        state.backgroundChanged = !state.backgroundChanged;
      },
      sidebarClass(state, payload) {
        state.sidebarClass = payload;
      },
      presentation(state) {
        state.shownPresentation = !state.shownPresentation;
      },
      points(state) {
        state.pointsAreVisible = !state.pointsAreVisible;
      }
    },
    actions: {
      changeBackground(vuexContext) {
        vuexContext.commit("backgroundChange");
      },
      navToggle(vuexContext) {
        vuexContext.commit("navActive");
      },
      aboutStyle(vuexContext, payload) {
        console.log(payload);
        vuexContext.commit("sidebarClass", payload);
      },
      textdone(vuexContext) {
        vuexContext.commit("presentation");
      },
      pointsdone(vuexContext) {
        vuexContext.commit("points");
      }
    },
    getters: {
      loadedMessage(state) {
        return state.formMessage;
      },
      sideDefaultClass(state) {
        return state.sidebarDefaultClass;
      },
      sideClass(state) {
        return state.sidebarClass;
      },
      navToggleState(state) {
        return state.navIsToggled;
      },
      backgroundState(state) {
        return state.backgroundChanged;
      },
      presentationIsShown(state) {
        return state.shownPresentation;
      },
      pointsAreShown(state) {
        return state.pointsAreVisible;
      }
    }
  });
};

export default createStore;
