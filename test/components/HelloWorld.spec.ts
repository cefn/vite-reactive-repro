import { mount, flushPromises } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";

describe("HelloWorld checkbox behaviour", () => {
  test("select checkbox", async () => {
    const selectionHandler = jest.fn();
    const wrapper = mount(HelloWorld, {
      props: {
        selectionHandler,
      },
    });
    const containerCheckbox = wrapper.find<HTMLInputElement>(
      'input[type="checkbox"]'
    );
    await containerCheckbox.trigger("click");
    //await containerCheckbox.trigger("change"); //jsdom BUG? this should not be necessary

    await flushPromises();

    expect(selectionHandler).toHaveBeenCalledTimes(1);
    expect(selectionHandler).toHaveBeenCalledWith(true);
  });
});
