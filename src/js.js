import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "random-username-suggestor",

  initialize() {
    withPluginApi("0.8.7", (api) => {
      const generateName = () => {
        const adjectives = ["Swift", "Mighty", "Brave", "Silent", "Dangerous", "Cunning", "Sly", "Vexing", "Flickering", "Radiant", "Joyous", "Ideal", "Original"];
        const nouns = ["Panda", "Tiger", "Eagle", "Wolf", "Otter", "Lion", "Bear", "Fox", "Deer", "Rabbit", "Bird", "Fish", "Snake", "Lizard", "Frog", "Turtle", "Shark", "Whale", "Dolphin", "Octopus", "Squid", "Crab", "Lobster", "Shrimp", "Chicken", "Duck", "Goose", "Turkey", "Horse", "Cow", "Sheep", "Pig", "Goat", "Donkey", "Mule", "Zebra", "Giraffe", "Elephant", "Rhinoceros", "Hippopotamus", "Crocodile", "Alligator", "Kangaroo", "Koala", "Panda", "Tiger", "Eagle", "Wolf", "Otter", "Lion", "Bear", "Fox", "Deer", "Rabbit", "Cat", "Dog", "Bird", "Fish", "Snake", "Lizard", "Frog", "Turtle", "Shark", "Whale", "Dolphin", "Octopus", "Squid", "Crab", "Lobster", "Shrimp", "Chicken", "Duck", "Goose", "Turkey", "Horse", "Cow", "Sheep", "Pig", "Goat", "Donkey", "Mule", "Zebra", "Giraffe", "Elephant", "Rhino", "Hippo", "Crocodile", "Alligator", "Kangaroo", "Koala", "Hotel", "Apple", "Orange", "Citation", "Roman", "Builder", "Pickaxe", "Obbyist"];
        return `${adjectives[Math.floor(Math.random() * adjectives.length)]}${
          nouns[Math.floor(Math.random() * nouns.length)]
        }${Math.floor(Math.random() * 999)}`;
      };

      setInterval(() => {
        const usernameInput = document.querySelector("#new-account-username");
        if (!usernameInput || document.querySelector(".suggest-username-btn")) return;

        const suggestBtn = document.createElement("button");
        suggestBtn.className = "suggest-username-btn";
        suggestBtn.type = "button";
        suggestBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"/></svg>`;

        suggestBtn.addEventListener("click", (e) => {
          e.preventDefault();
          usernameInput.value = generateName();
          usernameInput.dispatchEvent(new Event("input", { bubbles: true }));
          usernameInput.focus();
        });

        usernameInput.parentNode.appendChild(suggestBtn);
      }, 500);
    });
  },
};