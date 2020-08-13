# SIMPLE DOCKER MANAGER FOR BASIC DOCKER CAPABILITIES

# DOCKER FEATURES AVAILABLE

The list above, is a list of features that are availbale, and pending
features to implement. 

These concepts are for shortening the list.
- **Objects**: Images, Networks, Containers, Volumes.
- **Docker source**: Docker engine source, local or remote. The way 
the docker operations are done change depending on the source selected
using local source, `nodejs child_process` is gonna be used, on the other hand
using a remote source, the native http request objects of node is used.
- **Docker daemon**: The service natively runnig for docker.
- **someother**: desc

- [ ] Setup **Docker source**.
- [ ] Configure and manage the **Docker deamon**.
- [ ] See general stadistics(Disk, memory, network consumption) in dashboard.
- [ ] Build docker images, from Dockerfile.
- [ ] List, create, delete, label, configure **objects**.
- [ ] Run, start, stop, manage **containers**.
- [ ] Setup and configure your own registry.
- [ ] 
<!-- |   Syntax  |   Description |
| --------- |   ----------- |
|   Header  |   Title       |
| Paragraph |   Text        | -->

Using `sudo-prompt` to get sudo permissions when docker is not running on rootless mode.
**Root Mode is strongly recoomended.** :bangbang: