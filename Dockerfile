FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SLTechnicalTipsYT/cobra-bot /root/cobra-bot
WORKDIR /root/cobra-bot/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
