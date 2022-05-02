import { mount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";

describe("HelloWorld checkbox behaviour", () => {
  test("select checkbox", async () => {
    const selectionHandler = jest.fn();
    const wrapper = mount(HelloWorld, {
      props: {
        selectionHandler,
      },
      attachTo: document.body,
    });

    try {
      const containerCheckbox = wrapper.find<HTMLInputElement>(
        'input[type="checkbox"]'
      );
      await containerCheckbox.trigger("click");

      expect(selectionHandler).toHaveBeenCalledTimes(1);
      expect(selectionHandler).toHaveBeenCalledWith(true);
    } finally {
      wrapper.unmount();
    }
  });
});
