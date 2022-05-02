module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "vue"],
};
