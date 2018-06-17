import { observable } from 'mobx';
import { Socket } from "../services/socket";
import { Storage } from "../services/storage";
import { Backend } from "../services/backend";

export class AppStore {

  socket;
  api;
  storage;
  constructor(HOST) {
    console.log("host at constructor in app store", HOST);
    this.SOCKET_HOST = HOST;
    this.socket = new Socket(HOST);
    this.storage = new Storage();
    this.api = new Backend({ socket: this.socket, storage: this.storage })
  }

  @observable loggedIn = false;
  @observable SOCKET_HOST = '';

  init = async () => {
    const open = this.socket.isOpen();
    console.log("Init from mobx", open)
  }

}