import {observable} from "mobx";

class PlayStore {
    @observable plays = []
}

const playStore = new PlayStore();
export default playStore;