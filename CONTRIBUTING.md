## Report a Bug
Prior to reporting a bug, please make sure there is not already an active [issue](https://github.com/mougharik/Watchlist/labels/bugs) of this bug. When submitting a new bug, please make sure to be as descriptive as possible (what string of events happened leading up to the fault, what environment you are using, what type of device you are using, etc.) to better understand the situation and address it more quickly.

## Making Changes
1. Fork the master branch  
    ```
    # for the master branch and clone your forked copy
    $ git clone https://github.com/<YourGitHubUsername>/Watchlist.git
    ```  
    * If you anticipate spending considerable amount of time on a change, make sure you keep your local repository up to date.

    <br>

    ```
    # add upstream repository to remotes
    $ git remote add upstream https://github.com/mougharik/Watchlist.git
    
    # verify that the upstream repository was added
    $ git remote -v
    ```
    * Whenever you want to update your fork, you will need to fetch from the upstream repository to retrieve its updated branches and commits.

    <br>

    ```
    # fetch from upstream
    $ git fetch upstream

    # checkout your master branch and merge upstream's master branch
    $ git checkout master
    $ git merge upstream/master
    ```
    * ***If there are unique changes to your local master branch, you may have to deal with conflicts. Follow the next section to avoid this.***
2. Create a branch for the feature you'd like to add/work  
    ```
    # make sure you are on master branch
    $ git checkout master

    # choose a simple name that describes the feature for new branch name
    $ git branch feature_name

    # checkout your new branch
    # git checkout -b feature_name combines this and the last command
    $ git checkout feature_name
    ```
3. Submit your pull request  
    * In the case of new commits to the upstream master, you will want to rebase your local master branch to avoid any future conflict resolution work.
    
    <br>
    
    ```
    # fetch upstream and merge
    $ git fetch upstream
    $ git checkout master
    $ git merge upstream/master

    # if any new commits, rebase development branch
    $ git checkout feature_name
    $ git rebase master
    ```
    * Now all there is left to do is open your forked repository on GitHub, use the dropdown list to select your development branch (feature_name), and click the pull request button.

# Resources
* [GitHub Forking and Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962)  
* [GitHub Branching](https://guides.github.com/introduction/flow/)
