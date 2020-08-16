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
- [ ] List, create, **delete**, label, configure **objects**.
- [ ] Run, start, stop, manage **containers**.
- [ ] Setup and configure your own registry.
- [ ] 
<!-- |   Syntax  |   Description |
| --------- |   ----------- |
|   Header  |   Title       |
| Paragraph |   Text        | -->

Below is the list of the docker objects with their respective operations
to clear which operations are in common between the objects, and how they are
implemented on the library.

|	Operation/Object		|		Image		|		Container		|		Volume		|		Network		|
|		------------		|	-----------		|		------------	|	------------	|	------------	|
|		create				|		 :x:		|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|
|		attach				|		 :x:		|	:heavy_check_mark:	|        :x:     	|        :x:    	|
|		commit				|        :x:     	|	:heavy_check_mark:	|        :x:     	|        :x:    	|
|		cp					|        :x:     	|	:heavy_check_mark:	|        :x:     	|        :x:    	|
|		diff				|        :x:     	|	:heavy_check_mark:	|        :x:     	|        :x:    	|
|		exec				|        :x:     	|	:heavy_check_mark:	|        :x:     	|        :x:    	|
|		export				|        :x:     	|	:heavy_check_mark:	|        :x:     	|        :x:    	|
|		inspect				|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|
|		kill				|        :x:    	|	:heavy_check_mark:	|        :x:      	|        :x:    	|
|		logs				|        :x:    	|	:heavy_check_mark:	|        :x:      	|        :x:    	|
|		ls					|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|
|		pause				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		port				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		prune				|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark: |
|		rename				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		restart				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		rm					|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|
|		run					|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		start				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		stats				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		stop				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		top					|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		unpause				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		update				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		wait				|        :x:     	|	:heavy_check_mark:	|        :x:    	|        :x:    	|
|		build				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		history				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		import				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		load				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		pull				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		push				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		save				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		tag 				|:heavy_check_mark:	|			:x:			|        :x:    	|        :x:    	|
|		connect 			|        :x:       	|			:x:			|        :x:    	|:heavy_check_mark:	|
|		disconnect 			|        :x:       	|			:x:			|        :x:    	|:heavy_check_mark:	|

The same table but with common between all of them operations only.

|	Operation/Object		|		Image		|		Container		|		Volume		|		Network		|
|		------------		|	-----------		|		------------	|	------------	|	------------	|
|		inspect				|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|
|		ls					|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|
|		prune				|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark: |
|		rm					|:heavy_check_mark:	|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|

Create can be done with 3 of all.

|	Operation/Object		|		Image		|		Container		|		Volume		|		Network		|
|		------------		|	-----------		|		------------	|	------------	|	------------	|
|		create				|		 :x:		|	:heavy_check_mark:	|:heavy_check_mark:	|:heavy_check_mark:	|

Using `sudo-prompt` to get sudo permissions when docker is not running on rootless mode.
**Root Mode is strongly recoomended.** :bangbang:

