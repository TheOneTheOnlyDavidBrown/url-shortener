FROM ruby:2.7
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs yarn
RUN mkdir /izeaapp
WORKDIR /izeaapp
COPY Gemfile /izeaapp/Gemfile
COPY Gemfile.lock /izeaapp/Gemfile.lock
RUN bundle install
CMD ["rails", "server", "-b", "0.0.0.0"]

