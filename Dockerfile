FROM node:lts-iron

WORKDIR /galan_armando_ui_garden/

COPY public/ /galan_armando_ui_garden/public
COPY src/ /galan_armando_ui_garden/src
COPY package.json /galan_armando_ui_garden/
COPY . /galan_armando_ui_garden

RUN npm install

CMD ["npm", "run", "storybook"]