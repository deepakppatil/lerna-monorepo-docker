FROM node:14.16-buster AS builder

WORKDIR /home/app

# Yarn
COPY package.json /home/app/
COPY yarn.lock /home/app/
COPY packages/mfa1/package.json /home/app/packages/mfa1/
COPY packages/mfs3/package.json /home/app/packages/mfs3/
COPY packages/mfa2/package.json /home/app/packages/mfa2/
COPY packages/shell/package.json /home/app/packages/shell/
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn single:build

FROM nginx:1.19-alpine
COPY --from=builder /home/app/build /usr/share/nginx/html
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
