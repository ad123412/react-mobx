import {action, autorun, computed, observable} from "mobx";

//configure({ enforceActions: "observed" });

class MyMobxStore {
    constructor() {
        autorun(() => {
            this.usersCount = this.count;
        });
    }

    @observable users = [];

    @computed get count() {
        return this.users.length;
    }

    @action addUsers = (users) => {
        console.log('before state change...');
        users.forEach(u => console.log(`${u.id} + ${u.name}`))
        users.forEach(user => this.users.push(user));
        this.users.forEach(u => console.log(`${u.id} + ${u.name} + ${u.email}`));
    }

    @observable state = 'pending';
}

const myMobxStore = new MyMobxStore();
export default myMobxStore;