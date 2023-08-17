"use strict";

module.exports = {
  name: "calculator",
  settings: {},
  dependencies: [],
  actions: {
    calculate: {
      rest: "POST /calculate",
      params: {
        a: "number",
        b: "number",
        sign: "string"
      },
      async handler(ctx) {
        const { a, b, sign } = ctx.params;
        let result;

        switch (sign) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = a / b;
            break;
          default:
            throw new Error("Invalid sign");
        }

        return { result };
      }
    }
  },
  events: {},
  methods: {},
  created() {},
  async started() {},
  async stopped() {}
};