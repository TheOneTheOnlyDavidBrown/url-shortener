# Url-shortener

# About
This is a demo app built in Ruby on Rails with an Ember front end. Utilizing Docker to container-ize it. The front and back ends are separate containers and execute independently.

# Installation & execution
This is my first Docker container app so hopefully I'm not missing anything in the install :) If you can't run it let me know, I'd be happy to help.

## Front end
`cd frontend`

`cd ember-app`

`docker-compose up`

App will be running on `localhost:4200`

## Back end
`cd backend`

`docker-compose up`

`docker-compose run web rake db:craate`

`docker-compose run web rake db:migrate`

App will be running on `localhost:3000` with api end points prefixed with `/api/v1/`

# Other considerations/what I'd change
I'd add more test first and foremost. This is my first stab at Docker and Ember so there are a few consistency issues. For a more mature/bigger app I'd probably introduce a serializer. There are various minor errors based on depricated tags and such. Not spending time removing those since this is a demo app. Would remove if this were a real production app.
