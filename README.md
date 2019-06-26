# vue-event-bus
EventBus object for use in Vue 2.
You can easily communicate differents components through this bus.

Is important detach the events in beforeDestroy for prevent have registered the same event twice, if you reload the component.
Other option is use the 'clear' function that removes all the attached events.

Usage:
```javascript
import {EventBusFactory} from "./event-bus-factory.js";

const eventbus = EventBusFactory.createInstance();

let ComponentPopup = {
    template: "template-popup",
    mounted: function () {
        eventbus.$on("open-popup", this.open);
        eventbus.$on("close-popup", this.close);
    },
    beforeDestroy: function () {
        eventbus.$off("open-popup", this.open);
        eventbus.$off("close-popup", this.close);
    },
    data: function () {
        return {
            message: "",
            visible: false,
        };
    },
    methods: {
        open(message) {
            this.message = message;
            this.visible = true;
        },
        close() {
            this.visible = false;
        },
    },
};

let ComponentOther = {
    template: "template-other",
    methods: {
        openPopupAction() {
            eventbus.$emit("open-popup", "Hello");
        },
        closePopupAction() {
            eventbus.$emit("close-popup");
        }
    },
};

```