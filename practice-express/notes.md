# Intro to Express

        # Initailize a new node project
            -npm init -y
            -npm install <dependencies> (express)

# Vocab

    # Route
        * Event Listener for http requests

    # Endpoint
        * "/item" "/user"

    # Port
    Type on browswer * localhost:9000/ and would run because it is running locally on my computer (Stay below 9000)

# Intro to REST API architecture

    # REST = Representational State Transfer

    # Resource - Single Item (object) in a database
        /user
    # Collection - A collection of similar items in a database
        /users
    # Base (root) URL - http://amazon.com

    # API Endpoint - http://amazon.com/movies (Nouns are better than verbs for endpoints)

    # Parameters - /movies/:movieID

    # Query  (query string) - /movies>?genre=action&year=1999 (filter Request for action genre and year released was 1999)
 
    # Client Frontend application 

    # Server - Intermediary 

    # Requeset Method - CRUD - GET POST PUT DELETE

# Middleware - a fucntion that fires on the inbetween

# UUID - create unique IDs
    - npm install uuid
    - const {v4: uuidv4} = require('uuid')

# Express Router - Enables to modularize our routes in express

# Modular file organization

# URL Parameters

    # Parts of a URL
    * Base - http://amazon.com
    * Endpoint - http://amazon.com/images
    * Parameter - http://amazon.com/images/981916817
    * Query
# Parameters (req.params) - GET One

# URL Queries
    #Query string - (typically to filter results)
    * Begins with the "?"
    * Build of key=value pairs.
    * Multiple queries separated by the "&"

# Connecting the Front-end to the Back-end

    # Folder Structure 
    # Proxy

# Mongoose has to purposes
    #Methods Find arguement


    atlas password 7fYA8S4rO8mJNVzg

# Mongoose Schemas 
    * Blueprints for out data

# Mongoose Models
    * Modoels have a Name, and a Blueprint (Schema)
    * Models are used to perform the CRUD operations on data created with the Model

