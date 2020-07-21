FROM registry.cn-shanghai.aliyuncs.com/c7n/frontbase:0.8.0

COPY ./dist /usr/local/openresty/nginx/html
COPY ./docker/enterpoint.sh /usr/local/openresty/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/

RUN chmod +x /usr/local/openresty/nginx/html/enterpoint.sh \
    && chown -R www-data:www-data /usr/local/openresty
USER 33

ENTRYPOINT ["/usr/local/openresty/nginx/html/enterpoint.sh"]
CMD ["/usr/local/openresty/bin/openresty", "-g", "daemon off;"]
