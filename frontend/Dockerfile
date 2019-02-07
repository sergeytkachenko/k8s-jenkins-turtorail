FROM node as build
WORKDIR /build
COPY ./frontend/ .
RUN npm install 
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist/ .

EXPOSE 80