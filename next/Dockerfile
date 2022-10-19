FROM node:16

RUN mkdir /ttc_website

WORKDIR /ttc_website

COPY ./package.json /ttc_website

RUN npm install

COPY . /ttc_website

RUN npm run build

CMD ["npm","start"]