# Shop 3.0

## What's felgenoutlet.base?

The customer shop of felgenoutlet.de specifically built for Austria.

## Getting Started

1. Checkout this repository

   ```bash
     git clone ssh://git@bb.felgenoutlet.de:7999/shop/felgenoutlet.base.git /path/to/your/workspace
   ```

   Where /path/to/your/workspace is the place where you want to store the project on your computer.

2. Install the bundle `bundle install` and package `yarn install --check-files`
3. Fetch the keys from the keypass to access encrypted credential files
4. run `rails g docker_dir_env:install`
5. Setup your database (It's recommended to use docker. See "Database Creation")
6. Start your server
   with `foreman start`. This will start a puma server listening on port ENV['PORT'] and a sidekiq server for file analyzing with active storage.

   When using `byebug` to debug make sure to use `rails s` since foreman hinders you from inputing data while running.

## System dependencies

- Ruby (rvm)
- Node.js
- libmysqlclient-dev
- python-dev
- npm
- docker (see [docker.com](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository))
- mailhog (docker container) running on port 1025
- Redis Server running on port 6379
- direnv (see [direnv.net](https://direnv.net/))

## Bundle

- Ruby / Rails version
  - started with Ruby 2.7.3 (see [.ruby-version](./.ruby-version) for current version)
  - started with Rails 6.1.3.1 (see [Gemfile.lock](./Gemfile.lock) for current version)
- Yarn Packages
  - Bootstrap v4.5.2
  - Admin LTE v3.0.5
  - Popper.js v1.16.1
  - jQuery v3.5.1
  - Fontawesome Free v5.14.0

## Mailhog setup

1. Make sure having docker installed
2. ![mailhog install instruction image from doc/readme-images/mailhog-install.png](./doc/readme-images/mailhog-install.png)

## Database creation

You may need to run `direnv allow` first.

```bash
./lib/scripts/docker-db-setup.sh
```

### Generate dummy data

For development there are test data available. To generate them run
`rails db:create_test_data:all` on a clean database.

To only create specific test data run `rails db:create_test_data:TASK_NAME`. To determine `TASK_NAME` see [test_data.rake](./lib/tasks/test_data.rake).

### How to import by karafka

change the data origin in `config/environments/development.rb` to `config.x.karafka.bootstrap_servers = 'kafkadocker:9091,kafkadocker:9092,kafkadocker:9093'` execute
```bash
bundle exec karafka s
```
and take a long break

# Test suite

We are using Rspec for testing.

## How to generate system tests

Always prefer the scaffold generator when adding new resources!
To generate a new system test after adding a new resource run:

```bash
# given you added a resource named Toast
# with e.g.: rails g scaffold Toast brot
rails g rspec:system Toast
```

## How to run the test suite

```bash
rspec
```

## Style enforcement and linting

### General

To run all checks with a single command: `bin/check`

This will run the following checks:

#### Check for Vulnerabilities

```bash
bin/brakeman
```

#### Check Code style

```bash
bin/getcop
```

#### Run tests and check test coverage

```bash
bin/runspec
```

#### Check Yaml files

```bash
bin/yaml-lint
```

###Add a hook to force a code check before publishing

```bash
rails g getcop:install_pre_commit_hook
```

## Services (job queues, cache servers, search engines, etc.)

tbd.

# Credentials

Grab keys from [credentials](https://docs.felgenoutlet.de/x/EYGrAg)

# Documentation

You can generate a developer documentation by running `yard` in your project directory. This will generate a documentation website in the `doc` folder. You can open the index.html from there in your browser to view the documentation.

# Jenkinsfile

The Jenkinsfile decribes the CI/CD steps that are run whenever a push happens. Please do not change them unless absolutely neccessary.

# Devise Reset Password Setup

The reset password configuration was taken from https://mailtrap.io/blog/devise-reset-password/

# Manage translation and localization with static analysis, for Ruby i18n

for further information see https://github.com/glebm/i18n-tasks

## Handle own I18n exceptions

i18n-task provides automatism to scan the project for missing or unused files.
In out case a lot of dynamically built translation keys are present.
The parser is not able to detect these ones and will mark these as "unused".
To prevent the deletion of these keys from the translations add these keys as exceptions to `app/views/shared/_i18n-tasks_ignore.html.erb`
This partial contains all exceptions with the syntax `<% # i18n-tasks-use t("<KEY>") %>'`.

For an initial creation of this file the following one liner was used in the ruby console

```
File.write('app/views/shared/_i18n-tasks_ignore_2.html.erb', `i18n-tasks unused -f keys`.split("\n").map{_1.gsub(/en\.|de\./,'').prepend('<% # i18n-tasks-use t("').concat('") %>')}.uniq.join("\n"))
```
