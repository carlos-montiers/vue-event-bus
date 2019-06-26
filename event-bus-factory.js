// EventBusClass
// @author Carlos Montiers A. <cmontiers@gmail.com>
class EventBusClass {

    /**
     * Constructor
     */
    constructor() {
        this.bus = new Vue();
    }

    /**
     * Emit an event
     * @param eventName
     * @param ...params
     */
    $emit(eventName, ...params) {
        if (eventName) {
            Vue.prototype.$emit.apply(this.bus, arguments);
        }
    }

    /**
     * Listen an event
     * @param eventName
     * @param callback
     */
    $on(eventName, callback) {
        if (eventName && callback) {
            Vue.prototype.$on.apply(this.bus, arguments);
        }
    }

    /**
     * Stop listening an event
     * @param eventName
     */
    $off(eventName) {
        if (eventName) {
            Vue.prototype.$off.apply(this.bus, arguments);
        }
    }

    /**
     * Stop listening all events
     */
    clear() {
        Vue.prototype.$off.apply(this.bus);
    }

}

class EventBusFactory {

    static createInstance() {
        return new EventBusClass();
    }

}

export {EventBusFactory, EventBusClass};
