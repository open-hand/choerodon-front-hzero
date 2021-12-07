FROM registry.hand-china.com/vista/frontbase:0.10.1
RUN chown -R nginx:nginx /usr/share/nginx/html
COPY --chown=nginx:nginx ./dist /usr/share/nginx/html
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x entrypoint.sh
USER 101
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
