FROM registry.cn-shanghai.aliyuncs.com/c7n/frontbase:0.9.0

COPY --chown=nginx:nginx ./dist /usr/share/nginx/html
COPY ./entrypoint.sh /entrypoint.sh
COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN chmod +x entrypoint.sh
USER 101
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
