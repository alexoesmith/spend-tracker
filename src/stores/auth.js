import { defineStore } from "pinia";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return { user: null };
  },
  actions: {
    async signUserIn(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        alert(err.code);
      }
      this.user = auth.currentUser;
    },
    async signUserOut() {
      await signOut(auth);
      this.user = null;
    },
  },
});
