
class Storage {
    constructor({prefix = 'badin_teams_', storage = window.localStorage} = {}) {
        this.prefix = prefix;
        this.storage = storage;
    }

    getItem(key) {
        try {
            const data = this.storage.getItem(key);
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }

    setItem(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    removeItem(key) {
        this.storage.removeItem(key);
    }

}


export default new Storage();
