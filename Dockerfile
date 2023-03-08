FROM docker/whalesay:latest
LABEL Name=cypresse2e Version=0.0.1
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm install
ENTRYPOINT [ "npx", "cypress", "run" ]

CMD [""]
