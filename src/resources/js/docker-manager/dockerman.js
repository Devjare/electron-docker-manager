function DockerManager(daemonconfig) {
    this.daemonconfig = daemonconfig;

    this.initDaemon = () => {
        console.log('initing daemon with config: ', this.daemonconfig);
    }
}